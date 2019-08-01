import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadState } from "helpers/LocalStorage";
import { NavLink } from "react-router-dom";
import Chatbot from "components/Chatbot";
import InputBox from "components/InputBox";


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
  handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };
  state = {
    profileClicked: false
  };

  componentWillMount = () => {};
  // componentDidMount = () => {
  //   addResponseMessage("Hi User!");
  //   toggleWidget();
  // };

  // componentWillUnmount() {
  //   toggleWidget();
  //   }

  componentWillReceiveProps = nextProps => {};
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
          <InputBox />
          <Chatbot handleNewUserMessage={this.handleNewUserMessage} />
          <div className="navbar-nav d-flex ml-auto">
            <li>
              <i
                data-toggle="modal"
                data-backdrop="static" data-keyboard="false"
                data-target="#search-box"
                className="fas fa-search"
              />
            </li>
            <li
              className="nav-item  dropdown dropdown-toggle"
              data-toggle="dropdown"
            >
              <button className="nav-link btn btn-default" type="button">
                <img src="images/icon.png" />
                <span>User</span> <i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Logout <i className="fa fa-sign-out" />
                </a>
              </div>
            </li>
          </div>
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
