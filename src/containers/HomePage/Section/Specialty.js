import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Specialty extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="section-specialty">
        <div className="specialty-container">
          <div className="specialty-header">
            <span className="title-section">Chuyên khoa phổ biến</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="specialty-body">
            <Slider {...settings}>
              <div className="specialty-customize">
                <div className="bg-img img1" />
                <div>Cơ xương khớp</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-img img2" />
                <div>Thần kinh</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-img img3" />
                <div>Tim mạch</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-img img4" />
                <div>Tiêu hoá</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-img img5" />
                <div>Tai mũi họng</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-img img6" />
                <div>Cột sống</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-img img7" />
                <div>Y học cổ truyền</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-img img8" />
                <div>Sản phụ khoa</div>
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
