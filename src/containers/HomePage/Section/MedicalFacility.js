import React, { Component } from "react";
import { connect } from "react-redux";
import "./MedicalFacility.scss";

import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-share section-medical-facility">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Cơ sở ý tế nổi bật</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-img section-medical-facility" />
                <div className="section-text">Hệ thống 1</div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-medical-facility" />
                <div className="section-text">Hệ thống 2</div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-medical-facility" />
                <div className="section-text">Hệ thống 3</div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-medical-facility" />
                <div className="section-text">Hệ thống 4</div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-medical-facility" />
                <div className="section-text">Hệ thống 5</div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-medical-facility" />
                <div className="section-text">Hệ thống 6</div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-medical-facility" />
                <div className="section-text">Hệ thống 7</div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-medical-facility" />
                <div className="section-text">Hệ thống 8</div>
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
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
