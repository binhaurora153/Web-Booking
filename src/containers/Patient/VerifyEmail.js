import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { postVerifyBookAppointment } from "../../services/userService";
import HomeHeader from "../HomePage/HomeHeader";
class VerifyEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusVerify: false,
      errCode: 0,
    };
  }
  async componentDidMount() {
    if (this.props.location && this.props.location.search) {
      let urlParams = new URLSearchParams(this.props.location.search);
      let token = urlParams.get("token");
      let doctorId = urlParams.get("doctorId");
      let res = await postVerifyBookAppointment({
        token: token,
        doctorId: doctorId,
      });
      console.log(res);
      if (res && res.errCode === 0) {
        this.setState({
          statusVerify: true,
          errCode: res.errCode,
        });
      } else {
        this.setState({
          statusVerify: true,
          errCode: res && res.errCode ? res.errCode : -1,
        });
      }
    }
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    let { statusVerify, errCode } = this.state;
    return (
      <>
        <HomeHeader />
        {statusVerify === false ? (
          <div>Loading data...</div>
        ) : (
          <div>
            {errCode === 0 ? (
              <div className="manage-doctor-container">
                <div
                  className="manage-doctor-title title mt-5 mb-4"
                  style={{
                    background: "linear-gradient(to left, gray 5%, red 100%)",
                    backgroundClip: "text",
                    color: "transparent",
                    fontSize: "30px",
                  }}
                >
                  <FormattedMessage id="patient.detail-doctor.book-succeed" />
                </div>
              </div>
            ) : (
              <div>
                <div className="manage-doctor-container">
                  <div
                    className="manage-doctor-title title mt-5 mb-4"
                    style={{
                      background: "linear-gradient(to left, gray 5%, red 100%)",
                      backgroundClip: "text",
                      color: "transparent",
                      fontSize: "30px",
                    }}
                  >
                    <FormattedMessage id="patient.detail-doctor.book-error" />
                  </div>
                </div>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
