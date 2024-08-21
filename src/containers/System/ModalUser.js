import { forEach, last } from "lodash";
import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
    this.listenToEmitter();
  }

  listenToEmitter() {
    emitter.on("EVEN_CLEAR_MODAL_DATA", () => {
      //reset state
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
      });
    });
  } //bus event

  componentDidMount() {}

  toggle = () => {
    this.props.toggleFromParent();
  };

  handleOnchageInput = (event, id) => {
    // //bad code

    // this.setState(
    //   {
    //     ...this.state,
    //   },
    //   () => {
    //     console.log("check bad state: ", this.state);
    //   }
    // );
    // good code
    let copyState = { ...this.state };
    copyState[id] = event.target.value;

    this.setState({
      ...copyState,
    });
  };

  checkValidateInput = () => {
    let isValid = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter: " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };
  handleAddNewUser = () => {
    //validate
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      //goi api
      this.props.createNewUser(this.state);
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className={"modal-user-container"}
        size="lg"
        centered
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Create a new user
        </ModalHeader>
        <ModalBody>
          {/*  */}
          <div className="modal-user-body">
            <div className="input-container">
              <label>
                <b>Email</b>
              </label>
              <input
                type="email"
                onChange={(event) => {
                  this.handleOnchageInput(event, "email");
                }}
                placeholder="Email"
                value={this.state.email}
              />
            </div>
            <div className="input-container">
              <label>
                <b>Password</b>
              </label>
              <input
                type="password"
                onChange={(event) => {
                  this.handleOnchageInput(event, "password");
                }}
                placeholder="Password"
                value={this.state.password}
              />
            </div>
            <div className="input-container">
              <label>
                <b>First name</b>
              </label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnchageInput(event, "firstName");
                }}
                value={this.state.firstName}
              />
            </div>
            <div className="input-container">
              <label>
                <b>Last name</b>
              </label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnchageInput(event, "lastName");
                }}
                value={this.state.lastName}
              />
            </div>
            <div className="input-container max-width-input">
              <label>
                <b>Address</b>
              </label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnchageInput(event, "address");
                }}
                value={this.state.address}
              />
            </div>
          </div>

          {/* <div className="form-group col-6">
            <label className="mb-2">
              <b>First name</b>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="firstName"
            />
          </div>
          <div className="form-group col-md-6">
            <label className="mb-2">
              <b>Last name</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              placeholder="Last name"
            />
          </div>

          <div className="form-group">
            <label className="mb-2">
              <b>Address</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="address"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-6">
            <label className="mb-2">
              <b>Phone number</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="phonenumber"
            />
          </div>
          <div className="form-group col-md-3">
            <label className="mb-2">
              <b>Sex</b>
            </label>
            <select name="gender" className="form-control">
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label className="mb-2">
              <b>Role</b>
            </label>
            <select name="roleId" className="form-control">
              <option value="1">Admin</option>
              <option value="2">Doctor</option>
              <option value="3">Patient</option>
            </select>
          </div> */}

          {/*  */}
        </ModalBody>
        <ModalFooter>
          <Button
            className="px-3"
            color="primary"
            onClick={() => {
              this.handleAddNewUser();
            }}
          >
            Sign up
          </Button>{" "}
          <Button
            className="px-3"
            color="secondary"
            onClick={() => {
              this.toggle();
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
