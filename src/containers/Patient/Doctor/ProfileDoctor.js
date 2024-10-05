import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../utils";
import { FormattedMessage } from "react-intl";
import "./ProfileDoctor.scss";
import { getProfileDoctorById } from "../../../services/userService";
import NumberFormat from "react-number-format";
import _ from "lodash";
import moment from "moment";
import { Link } from "react-router-dom";
class ProfileDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProfile: {},
    };
  }
  async componentDidMount() {
    let data = await this.getInforDoctor(this.props.doctorId);
    this.setState({
      dataProfile: data,
    });
  }

  getInforDoctor = async (id) => {
    let result = {};
    if (id) {
      let res = await getProfileDoctorById(id);
      if (res && res.errCode === 0) {
        result = res.data;
      }
    }
    return result;
  };

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
    }
    if (this.props.doctorId !== prevProps.doctorId) {
      let data = await this.getInforDoctor(this.props.doctorId);
      this.setState({
        dataProfile: data,
      });
    }
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // renderTimeBooking = (dataTime) => {
  //   let { language } = this.props;
  //   let labelVi = moment
  //     .unix(+dataTime.date / 1000)
  //     .format("dddd - DD/MM/YYYY");

  //   if (dataTime && !_.isEmpty(dataTime)) {
  //     let time =
  //       language === LANGUAGES.VI
  //         ? dataTime.timeTypeData.valueVi
  //         : dataTime.timeTypeData.valueEn;
  //     let date =
  //       language === LANGUAGES.VI
  //         ? (dataTime.label = this.capitalizeFirstLetter(labelVi))
  //         : moment
  //             .unix(+dataTime.date / 1000)
  //             .locale("en")
  //             .format("ddd - MM/DD/YYYY");
  //     return (
  //       <>
  //         <div className="date--time">
  //           {time} - {date}
  //         </div>
  //         <div>
  //           <FormattedMessage id="patient.booking-modal.booking-free" />
  //         </div>
  //       </>
  //     );
  //   }
  //   return <></>;
  // };

  renderTimeBooking = (dataTime) => {
    let { language } = this.props;

    // Kiểm tra xem dataTime có tồn tại và có thuộc tính date không
    if (dataTime && dataTime.date) {
      let labelVi = moment
        .unix(+dataTime.date / 1000)
        .format("dddd - DD/MM/YYYY");

      let time =
        language === LANGUAGES.VI
          ? dataTime.timeTypeData?.valueVi
          : dataTime.timeTypeData?.valueEn;

      let date =
        language === LANGUAGES.VI
          ? this.capitalizeFirstLetter(labelVi)
          : moment
              .unix(+dataTime.date / 1000)
              .locale("en")
              .format("ddd - MM/DD/YYYY");

      return (
        <>
          <div className="date--time">
            {time} - {date}
          </div>
          <div>
            <FormattedMessage id="patient.booking-modal.booking-free" />
          </div>
        </>
      );
    }

    // Nếu dataTime không tồn tại hoặc không có date
    return <></>;
  };

  render() {
    let { dataProfile } = this.state;
    let {
      language,
      isShowDes,
      dataTime,
      isShowLinkDetail,
      isShowPrice,
      doctorId,
    } = this.props;

    let nameVi = "",
      nameEn = "";
    if (dataProfile && dataProfile.positionData) {
      nameVi = `${dataProfile.positionData.valueVi}, ${dataProfile.lastName} ${dataProfile.firstName} `;
      nameEn = `${dataProfile.positionData.valueEn}, ${dataProfile.firstName} ${dataProfile.lastName}`;
    }
    return (
      <>
        <div className="intro-doctor">
          <div
            className="content-left"
            style={{
              backgroundImage: `url(${
                dataProfile && dataProfile.image ? dataProfile.image : ""
              })`,
            }}
          >
            {" "}
          </div>
          <div className="content-right">
            <div className="up">
              {language === LANGUAGES.VI ? nameVi : nameEn}
            </div>
            <div className="down">
              {isShowDes === true ? (
                <>
                  {dataProfile &&
                    dataProfile.Markdown &&
                    dataProfile.Markdown.description && (
                      <span>{dataProfile.Markdown.description}</span>
                    )}
                </>
              ) : (
                <>{this.renderTimeBooking(dataTime)}</>
              )}
            </div>
          </div>
        </div>
        {/* <div className="price-clinic">
          <FormattedMessage id="patient.booking-modal.price" />:{" "}
          {dataProfile &&
            dataProfile.Doctor_Infor &&
            language === LANGUAGES.VI && (
              <NumberFormat
                value={dataProfile.Doctor_Infor.priceTypeData.valueVi}
                displayType={"text"}
                thousandSeparator={true}
                suffix="VND"
              />
            )}
          {dataProfile &&
            dataProfile.Doctor_Infor &&
            language === LANGUAGES.EN && (
              <NumberFormat
                value={dataProfile.Doctor_Infor.priceTypeData.valueEn}
                displayType={"text"}
                thousandSeparator={true}
                suffix="$"
              />
            )}
        </div> */}

        {isShowLinkDetail === true && (
          <div className="view-detail-doctor">
            <Link className="link-doctor" to={`/detail-doctor/${doctorId}`}>
              Xem thêm
            </Link>
          </div>
        )}

        {isShowPrice && (
          <div className="price-clinic">
            <FormattedMessage id="patient.booking-modal.price" />:{" "}
            {dataProfile?.Doctor_Infor && language === LANGUAGES.VI && (
              <NumberFormat
                value={dataProfile?.Doctor_Infor?.priceTypeData?.valueVi}
                displayType={"text"}
                thousandSeparator={true}
                suffix="VND"
              />
            )}
            {dataProfile?.Doctor_Infor && language === LANGUAGES.EN && (
              <NumberFormat
                value={dataProfile?.Doctor_Infor?.priceTypeData?.valueEn}
                displayType={"text"}
                thousandSeparator={true}
                suffix="$"
              />
            )}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDoctor);
