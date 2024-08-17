import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import "./UserManage.scss";

import { getAllUsers } from "../../services/userService";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
    };
  }

  async componentDidMount() {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  }

  /*   Life cycle
    * Run component:
    1. run construct -> init state
    2. Did mount 
    3. Render
    */
  render() {
    console.log("Check render ", this.state);
    let arrUsers = this.state.arrUsers;
    return (
      <div className="users-container">
        <div
          className="title text-center mt-4"
          style={{
            background: "linear-gradient(to right, #30cfd0 0%, #330867 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Manage users with Thien Binh
        </div>
        <div className="users-table mt-5 mx-4">
          <table id="customers">
            <tr>
              <th>Email</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Address</th>
              <th className="text-center">Actions</th>
            </tr>

            {arrUsers &&
              arrUsers.map((item, index) => {
                console.log("Thiện Bình check map".item, index);
                return (
                  <tr>
                    <td>{item.email}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.address}</td>
                    <td className="text-center">
                      <button className="btn-edit">
                        <i className="fas fa-pencil-alt"></i>
                      </button>
                      <button className="btn-delete">
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
