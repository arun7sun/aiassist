import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadState } from "helpers/LocalStorage";
import { NavLink } from "react-router-dom";

import "./style";

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
});

class InputBox extends Component {
  componentWillMount = () => {
  };

  componentWillReceiveProps = nextProps => { };
  render = () => {
    return (
        <form action="submit" className="form-action">
        <div className="input-group">
          <div className="input-group-prepend">
            <span
              className="input-group-text icon"
              data-toggle="modal"
              data-target="#search-box"
            >
              <i className="fas fa-book" />
            </span>
          </div>
          <input
            type="text"
            data-toggle="modal"
            data-target="#search-box"
            className="form-control"
            placeholder="Type Your Query..."
          />
          <div className="input-group-append">
            <span
              className="input-group-text icon"
              data-toggle="modal"
              data-target="#search-box"
            >
              <i className="fas fa-microphone" />
            </span>
            <span
              className="input-group-text search-icon"
              data-toggle="modal"
              data-target="#search-box"
            >
              <i className="fas fa-search" />
            </span>
          </div>
        </div>
      </form>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputBox);
