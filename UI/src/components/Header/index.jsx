import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadState } from 'helpers/LocalStorage'
import { NavLink } from 'react-router-dom'
import Chatbot from 'components/Chatbot'

import "./style";



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
})

class Header extends Component {
    state = {
        profileClicked: false
    };

    componentWillMount = () => {
        // this.props.getHeader()
        // this.props.login(loadState().session.token,true)
    }

    componentWillReceiveProps = (nextProps) => {

    }
    handleProfileClick = () => {
        if (!this.state.profileClicked) {
            document.addEventListener('click', this.handleProfileOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleProfileOutsideClick, false);
        }

        this.setState(prevState => ({
            profileClicked: !prevState.profileClicked,
        }));
    }

    handleProfileOutsideClick = (e) => {
        if (this.profile && this.profile.contains(e.target)) {
            return;
        }
        this.handleProfileClick();
    }
    render = () => {
        return (
            <div className="section">
                <nav className="navbar navbar-expand-lg ">
                    <div className="d-flex">
                        <NavLink to={"/"} className="main-logo" ><img src="/images/Walmart_Logo1.png" /></NavLink>
                        <NavLink to={"/"} className="spark-logo" ><img src="/images/Walmart_logo_spark.png" /></NavLink>
                        <button className="button-hide" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <i className="fas fa-bars"></i>
                        </button>
                        <button className="navbar-toggler collapsed" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>


                    <form action="submit" className="form-action">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text icon" data-toggle="modal" data-target="#search-box"><i className="fas fa-book"></i></span>
                            </div>
                            <input type="text" data-toggle="modal" data-target="#search-box" className="form-control" placeholder="Type Your Query...." />
                            <div className="input-group-append">
                                <span className="input-group-text icon" data-toggle="modal" data-target="#search-box"><i className="fas fa-microphone"></i></span>
                                <span className="input-group-text search-icon" data-toggle="modal" data-target="#search-box"><i className="fas fa-search"></i></span>
                            </div>
                        </div>
                    </form>


                    <div class="navbar-nav d-flex ml-auto">
                        <li class="nav-item  dropdown dropdown-toggle" data-toggle="dropdown">
                            <button class="nav-link btn btn-default" type="button"><img src="images/icon.png" /> <span>Hello</span> <i class="fa fa-caret-down"></i></button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Logout <i class="fa fa-sign-out"></i></a>
                            </div>
                        </li>
                    </div>


                    <div class="modal fade"  data-keyboard="false" id="search-box">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    {/* <h4 class="modal-title">AI Assist</h4> */}
                                    {/* <button type="button" class="close" data-dismiss="modal"><i class="fas fa-caret-down"></i></button> */}
                                    <div class="modal-body">
                                        <Chatbot />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    

                </nav>

                <div className="navbar-collapse collapse" id="collapsibleNavbar">
                    <b>Hello</b>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
