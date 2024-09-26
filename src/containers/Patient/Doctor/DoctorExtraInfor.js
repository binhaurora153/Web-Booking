import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./DoctorExtraInfor.scss";
import { LANGUAGES } from "../../../utils";
import { getExtraInforDoctorById } from "../../../services/userService";
import { FormattedMessage } from "react-intl";
import NumberFormat from "react-number-format";
class DoctorExtraInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetailInfor: false,
      extraInfor: {},
    };
  }
  async componentDidMount() {}

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
    }
    if (this.props.doctorIdFromParent !== prevProps.doctorIdFromParent) {
      let res = await getExtraInforDoctorById(this.props.doctorIdFromParent);
      if (res && res.errCode === 0) {
        this.setState({
          extraInfor: res.data,
        });
      }
    }
  }

  ShowDetailInfor = (status) => {
    this.setState({
      isShowDetailInfor: status,
    });
  };
  render() {
    let { isShowDetailInfor, extraInfor } = this.state;
    let { language } = this.props;
    return (
      <div className="doctor-extra-infor-container">
        <div className="content-up">
          <div className="text-address">
            <FormattedMessage id="patient.extra-infor-doctor.text-address" />
          </div>
          <div className="name-clinic">
            {extraInfor && extraInfor.nameClinic ? extraInfor.nameClinic : ""}
          </div>
          <div className="detail-address">
            {extraInfor && extraInfor.addressClinic
              ? extraInfor.addressClinic
              : ""}
          </div>
        </div>
        <div className="content-down">
          {isShowDetailInfor === false && (
            <div className="short-infor">
              <FormattedMessage id="patient.extra-infor-doctor.price" />:{" "}
              <span className="price-edit">
                {extraInfor &&
                  extraInfor.priceTypeData &&
                  language === LANGUAGES.VI && (
                    <NumberFormat
                      value={extraInfor.priceTypeData.valueVi}
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix="VND"
                    />
                  )}

                {extraInfor &&
                  extraInfor.priceTypeData &&
                  language === LANGUAGES.EN && (
                    <NumberFormat
                      value={extraInfor.priceTypeData.valueEn}
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix="$"
                    />
                  )}
              </span>
              <span
                className="span-edit"
                onClick={() => this.ShowDetailInfor(true)}
              >
                <FormattedMessage id="patient.extra-infor-doctor.detail" />{" "}
              </span>
            </div>
          )}
          {isShowDetailInfor == true && (
            <>
              <div className="title-price-down">
                {" "}
                <FormattedMessage id="patient.extra-infor-doctor.price" />:{" "}
              </div>
              <div className="detail-infor">
                <div className="price">
                  <span className="left">
                    {" "}
                    <FormattedMessage id="patient.extra-infor-doctor.price" />:{" "}
                  </span>
                  <span className="right">
                    {extraInfor &&
                      extraInfor.priceTypeData &&
                      language === LANGUAGES.VI && (
                        <NumberFormat
                          value={extraInfor.priceTypeData.valueVi}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix="VND"
                        />
                      )}

                    {extraInfor &&
                      extraInfor.priceTypeData &&
                      language === LANGUAGES.EN && (
                        <NumberFormat
                          value={extraInfor.priceTypeData.valueEn}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix="$"
                        />
                      )}
                  </span>
                </div>
                <div className="note">
                  {extraInfor && extraInfor.note ? extraInfor.note : ""}
                </div>
              </div>
              <div className="payment">
                Người khám có thể thanh toán bằng hình thức:{" "}
                {extraInfor &&
                extraInfor.paymentTypeData &&
                language === LANGUAGES.VI
                  ? extraInfor.paymentTypeData.valueVi
                  : extraInfor.paymentTypeData.valueEn}
              </div>
              <div
                className="hide-price"
                onClick={() => this.ShowDetailInfor(false)}
              >
                <FormattedMessage id="patient.extra-infor-doctor.hide-price" />{" "}
              </div>
            </>
          )}
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
