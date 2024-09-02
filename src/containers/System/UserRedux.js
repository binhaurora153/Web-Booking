import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="user-redux-container">
        <div
          className="title mt-4"
          style={{
            background: "linear-gradient(to right, gray 10%, #330867 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          User Redux
        </div>
        <div className="user-redux-body">
          <div>Thêm mới người dùng</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
