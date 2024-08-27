import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
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
                  <b>Chuyên khoa</b>
                </div>
                <div className="subs-title">Tìm bác sĩ theo chuyên khoa</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Cơ sở y tế</b>
                </div>
                <div className="subs-title">Chọn bệnh viện phong khám</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Bác sĩ</b>
                </div>
                <div className="subs-title">Chọn bác sĩ giỏi</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Gói khám</b>
                </div>
                <div className="subs-title">Khám sức khoẻ tổng quát</div>
              </div>
            </div>
            {/* right content */}
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>Hỗ trợ
              </div>
              <div className="flag">VN</div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">
              <b>NỀN TẢNG Y TẾ</b>
            </div>
            <div className="title2">
              <b>CHĂM SÓC SỨC KHOẺ TOÀN DIỆN</b>
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
                  <b>Khám Chuyên Khoa</b>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="text-child">
                  <b>Khám từ xa</b>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-book"></i>
                </div>
                <div className="text-child">
                  <b>Khám tổng quát</b>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-vial"></i>
                </div>
                <div className="text-child">
                  <b>Xét nghiệm y học</b>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-user-md"></i>
                </div>
                <div className="text-child">
                  <b>Sức khoẻ tinh thần</b>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-hospital"></i>
                </div>
                <div className="text-child">
                  <b>Khám nha khoa</b>
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
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
