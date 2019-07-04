import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom';

import "./style";
// import { getSidebar, updateSidebar } from 'services/sidebar/actions';
// import { updatePath } from 'services/breadcrumbs/actions';

// import Loader from 'components/Loader'
// import Config from 'config'

const mapStateToProps = (state, ownProps) => ({
    // sidebar: state.sidebar.sidebar,
});

const mapDispatchToProps = dispatch => ({
    // getSidebar: () => dispatch(getSidebar()),
    // updateSidebar: (data) => dispatch(updateSidebar(data)),
    // updatePath: (data) => dispatch(updatePath(data))
})

class SideBar extends Component {
    state = {
        active: "/dashboard",
        reload: true
    };

    componentDidMount = () => {

    }

    componentWillMount = () => {
        // this.props.getSidebar()
    }

    componentWillReceiveProps = (nextProps) => {
    }
    render = () => {
        return (
            <div className="side-bar">
                <div className="welcome">
                    <div className="row">
                        <ul className="welcome-box">
                            <li>Welcome, <span>Shawn Fields</span></li>
                            <li>Location : <span>Bonneville AR</span></li>
                            <li className="text-right"><a href="#">Change Location</a></li>
                        </ul>

                        <ul className="navbar-nav ml-auto menu-icons">
                            <li className="nav-item d-flex">
                                <a className="nav-link" href="#"><i className="fa fa-share-square"></i></a>
                                <a className="nav-link" href="#"><i className="fa fa-download"></i></a>
                                <a className="nav-link" href="#"><i className="fa fa-redo"></i></a>
                                <a className="nav-link" href="#"><i className="fa fa-info-circle"></i></a>
                                <a className="nav-link" href="#">
                                    <button className="nav-item dropdown dropdown-toggle" data-toggle="dropdown">
                                        <a className="nav-link"><i className="fa fa-user"></i></a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Logout <i className="fa fa-sign-out"></i></a>
                                        </div>
                                    </button>
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className="icons-area">
                        <ul className=" d-flex">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-leaf"></i></li>
                            <li><i className="fa fa-handshake"></i></li>
                        </ul>
                    </div>
                </div>

                <div className="sidebar-nav-area">
                    <button className="btn btn-default text-blue  pl-5">Select View <span className="float-right"><i className="fa fa-chevron-left icon-color"></i></span></button>

                    <ul>
                        <li><a href="#" className="btn btn-default"><i className="fa fa-home"></i> Homepage </a></li>
                        <li><a href="#" className="btn btn-default"><i className="fa fa-home"></i> Budget </a></li>
                        <li><a href="#" className="btn btn-default"><i className="fa fa-wallet"></i> Cash Giving </a></li>
                        <li><a href="#" className="btn btn-default"><i className="fa fa-hand-holding-usd"></i> Product Giving </a></li>
                        <li><a href="#" className="btn btn-default"><i className="fa fa-american-sign-language-interpreting"></i> Associate Giving </a></li>
                        <li><a href="#" className="btn btn-default"><i className="fa fa-briefcase"></i> Fund Raising </a></li>
                        <li><a href="#" className="btn btn-default"><i className="fa fa-warehouse"></i> Spaces </a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBar))


