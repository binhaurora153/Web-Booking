import React, { Component } from "react";
import { connect } from "react-redux";
import "./ManagePatient.scss";
import Select from "react-select";
import * as actions from "../../../store/actions";
import { FormattedMessage } from "react-intl";
import { LANGUAGES, dateFormat } from "../../../utils";
import DatePicker from "../../../components/Input/DatePicker";
import moment from "moment"; //fotmat ngày tháng năm
import { toast } from "react-toastify";
import _ from "lodash";
import { saveBulkScheduleDoctor } from "../../../services/userService";
class ManagePatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
    };
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allDoctors !== this.props.allDoctors) {
    }
  }

  handleChangeSelect = async (selectedOption) => {
    this.setState({ selectedDoctor: selectedOption });
  };
  handleOnChangeDatePicker = (date) => {
    this.setState({
      currentDate: date[0],
    });
  };

  render() {
    // let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
    return (
      <div className="manage-patient-container">
        <div className="m-p-title">Quản lí bệnh nhân khám bệnh</div>

        <div className="manage-patient-body row ">
          <div className="col-4 form-group mb-5">
            <label>Chọn ngày khám</label>
            <DatePicker
              onChange={this.handleOnChangeDatePicker}
              className="form-control schedule-edit-date"
              value={this.state.currentDate}
              //   minDate={yesterday}
            />
          </div>
          <div className="col-12 table-manage-patient">
            <table className="table table-bordered table-hover ">
              <thead className="table-dark">
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                </tr>
                <tr>
                  <td>Mary</td>
                  <td>Moe</td>
                  <td>mary@example.com</td>
                </tr>
                <tr>
                  <td>July</td>
                  <td>Dooley</td>
                  <td>july@example.com</td>
                </tr>
              </tbody>
            </table>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);
