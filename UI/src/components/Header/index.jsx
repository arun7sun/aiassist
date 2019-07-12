import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadState } from 'helpers/LocalStorage'

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
            <div class="section">
                <nav class="navbar navbar-expand-lg">
                    <div class="d-flex logo-area">
                        <button class="navbar-toggler icon collapsed" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <i class="fas fa-bars"></i>
                        </button>
                        <Link to=""><img class="navbar-brand main-logo" src="images/Walmart_Logo1.png" /></Link>
                        <Link to=""><img class="spark-logo" src="images/Walmart_logo_spark.png" /></Link>
                        <button class="button-hide" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>

                    <form action="submit" class="form-action">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text icon" data-toggle="modal" data-target="#search-box"><i class="fas fa-book"></i></span>
                            </div>
                            <input type="text" data-toggle="modal" data-target="#search-box" class="form-control" placeholder="Type Your Query...." />
                            <div class="input-group-append">
                                <span class="input-group-text icon" data-toggle="modal" data-target="#search-box"><i class="fas fa-microphone"></i></span>
                                <span class="input-group-text icon" data-toggle="modal" data-target="#search-box"><i class="fas fa-search"></i></span>
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


                </nav>

                <div class="navbar-collapse collapse" id="collapsibleNavbar">
                    <b>Hello</b>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
