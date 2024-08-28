import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";

class HomeHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            {/* left content */}
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            {/* center content */}
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>
                    {" "}
                    <FormattedMessage id={"homeheader.speciality"} />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id={"homeheader.searchdoctor"} />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id={"homeheader.medical-facility"} />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id={"homeheader.select-room"} />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id={"homeheader.doctor"} />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id={"homeheader.select-doctor"} />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id={"homeheader.examination-package"} />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage
                    id={"homeheader.general-health-examination"}
                  />
                </div>
              </div>
            </div>
            {/* right content */}
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>
                <FormattedMessage id={"homeheader.support"} />
              </div>
              <div className="language-vi">VN</div>
              <div className="language-en">EN</div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">
              <b>
                <FormattedMessage id={"banner.title1"} />
              </b>
            </div>
            <div className="title2">
              <b>
                <FormattedMessage id={"banner.title2"} />
              </b>
            </div>
            <div className="search">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Tìm kiếm tại đây" />
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-hospital"></i>
                </div>
                <div className="text-child">
                  <b>
                    <FormattedMessage id={"banner.specialized-examination"} />
                  </b>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="text-child">
                  <b>
                    <FormattedMessage id={"banner.remote-examination"} />
                  </b>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-book"></i>
                </div>
                <div className="text-child">
                  <b>
                    <FormattedMessage id={"banner.general-examination"} />
                  </b>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-vial"></i>
                </div>
                <div className="text-child">
                  <b>
                    <FormattedMessage id={"banner.medical-test"} />
                  </b>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-user-md"></i>
                </div>
                <div className="text-child">
                  <b>
                    <FormattedMessage id={"banner.mental-health"} />
                  </b>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-wrench"></i>
                </div>
                <div className="text-child">
                  <b>
                    <FormattedMessage id={"banner.dental-examination"} />
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
