import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadState } from "helpers/LocalStorage";
import { NavLink } from "react-router-dom";
import Chatbot from "components/Chatbot";
import { Widget, toggleWidget, addResponseMessage, Launcher } from "react-chat-widget";

import "./style";
import "../Chatbot/style.css";

// import { getHeader, updateHeader } from 'services/header/actions';
// import { login } from 'services/login/actions';

const mapStateToProps = (state, ownProps) => ({
  // user: state.login.user,
  // header: state.header.header
});

const mapDispatchToProps = dispatch => ({
  // getHeader: () => dispatch(getHeader()),
  // login: (token,isAuth) => dispatch(login(token,isAuth)),
  // updateHeader: (data) => dispatch(updateHeader(data)),
});

class Header extends Component {
  state = {
    profileClicked: false
  };

  componentWillMount = () => {
  };
  // componentDidMount = () => {
  //   addResponseMessage("Hi User!");
  //   toggleWidget();
  // };

  // componentWillUnmount() {
  //   toggleWidget();
  //   }

  componentWillReceiveProps = nextProps => { };
  handleProfileClick = () => {
    if (!this.state.profileClicked) {
      document.addEventListener("click", this.handleProfileOutsideClick, false);
    } else {
      document.removeEventListener(
        "click",
        this.handleProfileOutsideClick,
        false
      );
    }

    this.setState(prevState => ({
      profileClicked: !prevState.profileClicked
    }));
  };

  handleProfileOutsideClick = e => {
    if (this.profile && this.profile.contains(e.target)) {
      return;
    }
    this.handleProfileClick();
  };
  render = () => {
    return (
      <div className="section">
        <nav className="navbar navbar-expand-lg ">
          <div className="d-flex">
            <NavLink to={"/"} className="main-logo">
              <img className="mainlogo" src="/images/logowhite.svg" />
            </NavLink>
            <NavLink to={"/"} className="spark-logo">
              <img src="/images/Walmart_logo_spark.png" />
            </NavLink>
            <button
              className="button-hide"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <i className="fas fa-bars" />
            </button>
            <button
              className="navbar-toggler collapsed"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <i className="fas fa-bars" />
            </button>
          </div>

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

          <div className="navbar-nav d-flex ml-auto">

            <li>
              <i data-toggle="modal" data-target="#search-box" className="fas fa-search" />

            </li>
            <li
              className="nav-item  dropdown dropdown-toggle"
              data-toggle="dropdown"
            >
              <button className="nav-link btn btn-default" type="button">
                <img src="images/icon.png" />
                  <span>Hello</span>{" "}
                  <i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Logout <i className="fa fa-sign-out" />
                </a>
              </div>
            </li>
          </div>
          <Chatbot />
          {/* <div className="modal fade" data-keyboard="false" id="search-box">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                   <h4 className="modal-title">AI Assist</h4>
                   <button type="button" className="close" data-dismiss="modal"><i className="fas fa-caret-down"></i></button>
                </div>
                <div className="modal-body">
                  <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    title={false}
                    showCloseButton={true}
                    subtitle={false}
                    launcher = {false}
                    fullScreenMode={false}
                    senderPlaceHolder="Type your query..."
                  />
                </div>
              </div>
            </div>
          </div> */}


        </nav>

        <div className="navbar-collapse collapse" id="collapsibleNavbar">
          <b>Hello</b>
        </div>
      </div>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
