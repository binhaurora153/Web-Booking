import React, { Component } from "react";
import { connect } from "react-redux";

import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

import * as actions from "../../../store/actions";
import { LANGUAGES } from "../../../utils";

class OutStandingDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDoctors: [],
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
      this.setState({
        arrDoctors: this.props.topDoctorsRedux,
      });
    }
  }
  componentDidMount() {
    this.props.loadTopDoctors();
  }
  render() {
    let arrDoctors = this.state.arrDoctors;
    let { language } = this.props;
    // arrDoctors = arrDoctors.concat(arrDoctors).concat(arrDoctors);
    return (
      <div className="section-share section-outstanding-doctor">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Bác sĩ nổi bật tuần qua</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              {/* <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-background">
                    <div className="bg-img section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Bác sĩ 1</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-background">
                    <div className="bg-img section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Bác sĩ 2</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-background">
                    <div className="bg-img section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Bác sĩ 3</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-background">
                    <div className="bg-img section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Bác sĩ 4</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-background">
                    <div className="bg-img section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Bác sĩ 5</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-background">
                    <div className="bg-img section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Bác sĩ 6</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-background">
                    <div className="bg-img section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Bác sĩ 7</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
              </div> */}

              {arrDoctors &&
                arrDoctors.length > 0 &&
                arrDoctors.map((item, index) => {
                  let imageBase64 = "";
                  if (item.image) {
                    imageBase64 = new Buffer(item.image, "base64").toString(
                      "binary"
                    );
                  }
                  let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName} `;
                  let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`;
                  return (
                    <div className="section-customize" key={index}>
                      <div className="customize-border">
                        <div className="outer-background">
                          <div
                            className="bg-img section-outstanding-doctor"
                            style={{
                              backgroundImage: `url(${imageBase64})`,
                            }}
                          />
                        </div>
                        <div className="position text-center">
                          <div>
                            {language === LANGUAGES.VI ? nameVi : nameEn}
                          </div>
                          <div>Cơ xương khớp</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
    topDoctorsRedux: state.admin.topDoctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTopDoctors: () => dispatch(actions.fetchTopDoctor()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
