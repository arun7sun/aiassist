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
            <nav className="navbar navbar-expand-lg ">
                <div className="header-left">
                    <Link to="/dashboard"><img src="/images/Walmart_Logo.png" /></Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-user"></i>
                </button>
                <div className="collapse navbar-collapse header-right-wrapper" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    </ul>
                    <div className='profile'>
                        <div className="dropdown">
                            <button className="dropbtn">
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <Link to="/dashboard">Home</Link>
                                <Link to="/logout">Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
