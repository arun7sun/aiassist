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
            <div className="section">
                <nav className="navbar navbar-expand-lg ">
                    <div className="d-flex">
                        <Link to="/dashboard" className="navbar-brand" ><img src="/images/Walmart_Logo1.png" /></Link>
                        <button class="button-hide" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <i className="fas fa-bars"></i>
                        </button>
                        <button class="navbar-toggler collapsed" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>


                    <form action="submit" className="form-action">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text icon" data-toggle="modal" data-target="#search-box"><i className="fas fa-book"></i></span>
                            </div>
                            <input type="text" data-toggle="modal" data-target="#search-box" class="form-control" placeholder="Type Your Query...." />
                            <div class="input-group-append">
                                <span class="input-group-text icon" data-toggle="modal" data-target="#search-box"><i className="fas fa-microphone"></i></span>
                                <span class="input-group-text search-icon" data-toggle="modal" data-target="#search-box"><i className="fas fa-search"></i></span>
                            </div>
                        </div>
                    </form>


                    <div class="navbar-nav d-flex ml-auto">
                        
                        <li class="nav-item  dropdown dropdown-toggle" data-toggle="dropdown">
                            <button class="nav-link btn btn-default" type="button"><img src="images/icon.png" /> Hello <i class="fa fa-caret-down"></i></button>
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
