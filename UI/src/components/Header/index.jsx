import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadState } from "helpers/LocalStorage";
import { NavLink } from "react-router-dom";
import Chatbot from "components/Chatbot";
import InputBox from "components/InputBox";
import "./style";
import "../Chatbot/style.css";

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

class Header extends Component {
  handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };
  state = {
    profileClicked: false
  };
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
          <div className="navbar-nav d-flex ml-auto profile-popup">
            <li>
              <i
                data-toggle="modal"
                data-backdrop="static"
                data-keyboard="false"
                data-target="#search-box"
                className="fas fa-search search-modal-icon"
              />
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src="images/icon.png" />
                <span>Adithyaaaa </span>
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{"minWidth":"50px"}} aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="http://localhost:3000/logout">
                  Logout
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
