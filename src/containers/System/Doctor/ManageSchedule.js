import React, { Component } from "react";
import { connect } from "react-redux";
import "./ManageSchedule.scss";
import Select from "react-select";
import * as actions from "../../../store/actions";
import { FormattedMessage } from "react-intl";
import { LANGUAGES, dateFormat } from "../../../utils";
import DatePicker from "../../../components/Input/DatePicker";
import moment from "moment"; //fotmat ngày tháng năm
import { toast } from "react-toastify";
import _ from "lodash";
import { saveBulkScheduleDoctor } from "../../../services/userService";
class ManageSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDoctors: [],
      selectedDoctor: {},
      currentDate: "",
      rangeTime: [],
    };
  }
  componentDidMount() {
    this.props.fetchAllDoctors();
    this.props.fetchAllScheduleTime();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allDoctors !== this.props.allDoctors) {
      let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
      this.setState({
        listDoctors: dataSelect,
      });
    }
    if (prevProps.allScheduleTime !== this.props.allScheduleTime) {
      let data = this.props.allScheduleTime;
      if (data && data.length > 0) {
        data = data.map((item) => ({ ...item, isSelected: false }));
      }
      this.setState({
        rangeTime: data,
      });
    }
  }
  buildDataInputSelect = (inputData) => {
    let result = [];
    let { language } = this.props;
    if (inputData && inputData.length > 0) {
      inputData.map((item, index) => {
        let object = {};
        let labelVi = `${item.lastName} ${item.firstName}`;
        let labelEn = `${item.firstName} ${item.lastName}`;
        object.label = language === LANGUAGES.VI ? labelVi : labelEn;
        object.value = item.id;
        result.push(object);
      });
    }
    return result;
  };
  handleChangeSelect = async (selectedOption) => {
    this.setState({ selectedDoctor: selectedOption });
  };
  handleOnChangeDatePicker = (date) => {
    this.setState({
      currentDate: date[0],
    });
  };
  handleClickBtnTime = (time) => {
    let { rangeTime } = this.state;
    if (rangeTime && rangeTime.length > 0) {
      rangeTime = rangeTime.map((item) => {
        if (item.id === time.id) item.isSelected = !item.isSelected;
        return item;
      });
      this.setState({
        rangeTime: rangeTime,
      });
    }
  };

  handleSaveSchedule = async () => {
    let { rangeTime, selectedDoctor, currentDate } = this.state;
    let result = [];
    if (selectedDoctor && _.isEmpty(selectedDoctor)) {
      toast.error("Missing choose doctor!!!");
      return;
    }
    if (!currentDate) {
      toast.error("Missing date!!!");
      return;
    }

    // let formatedDate = moment(currentDate).format(dateFormat.SEND_TO_SERVER);
    // let formatedDate = moment(currentDate).unix();
    let formatedDate = new Date(currentDate).getTime();

    if (rangeTime && rangeTime.length > 0) {
      let selectedTime = rangeTime.filter((item) => item.isSelected === true);
      if (selectedTime && selectedTime.length > 0) {
        selectedTime.map((schedule) => {
          let object = {};
          object.doctorId = selectedDoctor.value;
          object.date = formatedDate;
          object.timeType = schedule.keyMap;
          object.maxNumber = 10;
          result.push(object);
        });
      } else {
        toast.error("Invalid date!!!");
        return;
      }
    }
    let res = await saveBulkScheduleDoctor({
      arrSchedule: result,
      doctorId: selectedDoctor.value,
      formatedDate: formatedDate,
    });
    if (res && res.errCode === 0) {
      toast.success("Save succeed!!!");
    } else {
      toast.error("ERROR SAVE!!!");
      console.log("error", res);
    }
  };
  render() {
    let { rangeTime } = this.state;
    let { language } = this.props;
    let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
    return (
      <div className="manage-schedule-container">
        <div className="m-s-title">
          <FormattedMessage id="manage-schedule.title" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6 form-group">
              <label>
                <FormattedMessage id="manage-schedule.choose-doctor" />
              </label>
              <Select
                value={this.state.selectedDoctor}
                onChange={this.handleChangeSelect}
                options={this.state.listDoctors}
              />
            </div>
            <div className="col-6 form-group">
              <label>
                <FormattedMessage id="manage-schedule.choose-date" />
              </label>
              <DatePicker
                onChange={this.handleOnChangeDatePicker}
                className="form-control schedule-edit-date"
                value={this.state.currentDate}
                minDate={yesterday}
              />
            </div>
            <div className="col-12 pick-hour-container">
              {rangeTime &&
                rangeTime.length > 0 &&
                rangeTime.map((item, index) => {
                  return (
                    <button
                      className={
                        item.isSelected === true
                          ? "btn btn-schedule active"
                          : "btn btn-schedule"
                      }
                      onClick={() => this.handleClickBtnTime(item)}
                      key={index}
                    >
                      {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                    </button>
                  );
                })}
            </div>
          </div>
          <button
            className="btn btn-primary btn-save-schedule"
            onClick={() => this.handleSaveSchedule()}
          >
            <FormattedMessage id="manage-schedule.save-infor" />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    allDoctors: state.admin.allDoctors,
    allScheduleTime: state.admin.allScheduleTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
    fetchAllScheduleTime: () => dispatch(actions.fetchAllScheduleTime()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
