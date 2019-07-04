import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import "./style";

const mapStateToProps = (state, ownProps) => ({
    overview: state.trends.overview
});

const checkActive = (original, current) => {
    return true
}

const topBarData = [
    {
        linkTo: '/dashboard/india',
        icon: 'fas fa-chart-line',
        name: 'India'
    },
    {
        linkTo: '/dashboard/us',
        icon: 'fas fa-exchange-alt',
        name: 'US'
    },
    {
        linkTo: '/dashboard/singapore',
        icon: 'far fa-address-book',
        name: 'Singapore'
    }
]

const TopBar = (props) => {

    const openNav1 = () => {
        document.getElementById("top-menu").style.height = "100px";
        document.getElementById("top-menu").style.display = "block";
    }

    const closeNav1 = () => {
        document.getElementById("top-menu").style.height = "25px";
    }


    const handleActive = (original, location) => {
        return location.href.match(original)
    }
    const TobBarItem = (data) => data.map((item, index) => <li key={index} className="nav-item"><NavLink to={item.linkTo} activeClassName="active-menu" isActive={(e) => handleActive(item.linkTo, location)}><span>{item.name}</span></NavLink></li>);
    return (
        <div>
            <input type="checkbox" id="navbar-checkbox" className="navbar-checkbox" />
            <nav className="top-menu-new">
                <ul>
                    {TobBarItem(topBarData)}
                </ul>
                <label htmlFor="navbar-checkbox" className="navbar-handle"></label>
            </nav>
        </div>
    )
}
export default TopBar;