import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

class Specialty extends Component {
  render() {
    return (
      <div className="section-share section-specialty">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Chuyên khoa phổ biến</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-img img1" />
                <div className="section-text">Cơ xương khớp</div>
              </div>
              <div className="section-customize">
                <div className="bg-img img2" />
                <div className="section-text">Thần kinh</div>
              </div>
              <div className="section-customize">
                <div className="bg-img img3" />
                <div className="section-text">Tim mạch</div>
              </div>
              <div className="section-customize">
                <div className="bg-img img4" />
                <div className="section-text">Tiêu hoá</div>
              </div>
              <div className="section-customize">
                <div className="bg-img img5" />
                <div className="section-text">Tai mũi họng</div>
              </div>
              <div className="section-customize">
                <div className="bg-img img6" />
                <div className="section-text">Cột sống</div>
              </div>
              <div className="section-customize">
                <div className="bg-img img7" />
                <div className="section-text">Y học cổ truyền</div>
              </div>
              <div className="section-customize">
                <div className="bg-img img8" />
                <div className="section-text">Sản phụ khoa</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
