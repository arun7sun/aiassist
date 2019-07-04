import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import "./style";

import "./style";
import {getPath} from 'services/breadcrumbs/actions'

import Loader from 'components/Loader'

const mapStateToProps = (state, ownProps) => ({
    path: state.breadcrumbs.breadcrumbs,
});

const mapDispatchToProps = dispatch => ({
    getPath: () => dispatch(getPath()),
    
})

class BreadCrumb extends Component {
    state = {

    };

    componentDidMount = () => {

    }

    componentWillMount = () => {
        this.props.getPath();
    }

    componentWillReceiveProps = () => {

    }

    render = () => {

        let path = this.props.path;
        let paths=_.split(path, '/');
        let pathArray=[];

        // _.map(paths,data=>{
        //     path.substring(0 , path.indexOf(data)+path.length());
        // })
        // let breadcrumbData = paths;

        // let value=_.map(breadcrumbData,data=>{
        //     return location.pathname.substring(0, location.pathname.indexOf(data));
        // })

        return (
            <ul className='hhgg'>
                {/* {breadcrumbData.map((item, index) => <li key={index}><NavLink to={paths[index]}>{paths[index]}</NavLink></li>)} */}
                <NavLink to={'/dashboard/cancellations'}>
                cancellations
                </NavLink>
                >
                <NavLink to={'/dashboard/customerexperience/nps'}>
                nps
                </NavLink>
                >
                <NavLink to={'/dashboard/customerexperience/csat'}>
                csat
                </NavLink>
                >
                <NavLink to={'/dashboard/compare'}>
                compare
                </NavLink>
            </ul>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreadCrumb);


