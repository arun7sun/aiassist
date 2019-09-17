import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom';

import "./style";
import { getSidebar, updateSidebar } from 'services/sidebar/actions';
import { updatePath } from 'services/breadcrumbs/actions';

import Loader from 'components/Loader'
import Config from 'config'

const mapStateToProps = (state, ownProps) => ({
    sidebar: state.sidebar.sidebar,
});

const mapDispatchToProps = dispatch => ({
    getSidebar: () => dispatch(getSidebar()),
    updateSidebar: (data) => dispatch(updateSidebar(data)),
    updatePath: (data) => dispatch(updatePath(data))
})

class SideBar extends Component {
    state = {
        active: "/dashboard",
        reload: true
    };

    componentDidMount = () => {

    }

    componentWillMount = () => {
        this.props.getSidebar()
    }

    componentWillReceiveProps = (nextProps) => {
    }

    findItem(data, d) {
        for (let i=0;i<data.length;i++){
            if(data[i].linkTo === d){
                return data[i]
            }
            else if(_.includes(d,data[i].linkTo) && data[i].child.length>0){
                return this.findItem(data[i].child,d)
            }
        }
    }

    setActive(item){
        if (item.level === "first-level") {
            let a = _.map(this.props.sidebar, data => {
                if (item.value === data.value) {
                    if (item.child.length > 0) {
                        let childData = _.map(item.child, child => {
                            return Object.assign(child, { clicked: false })
                        })
                        return Object.assign(data, { clicked: true, child: childData })
                    }
                    else {
                        return Object.assign(data, { clicked: true })
                    }
                }
                else {
                    if (data.child.length > 0) {
                        let childData = _.map(data.child, child => {
                            if (child.child.length > 0) {
                                let child2Data = _.map(child.child, child2 => {
                                    return Object.assign(child2, { clicked: false })
                                })
                                return Object.assign(child, { clicked: false, child: child2Data })
                            }
                            return Object.assign(child, { clicked: false })
                        })
                        return Object.assign(data, { clicked: false, child: childData })
                    }
                    else {
                        return Object.assign(data, { clicked: false })
                    }
                }
            })
            this.setState({
                active: item.linkTo,
                reload: false
            })
            this.props.updateSidebar(a)
        }
        else if (item.level === "second-level") {
            let a = _.map(this.props.sidebar, data => {
                if (item.parent === data.value) {
                    let childData = _.map(data.child, child => {
                        if (item.value === child.value) {
                            if (child.child.length > 0) {
                                let child2Data = _.map(child.child, child2 => {
                                    return Object.assign(child2, { clicked: false })
                                })
                                return Object.assign(child, { clicked: true, child: child2Data })
                            }
                            else {
                                return Object.assign(child, { clicked: true })
                            }
                        }
                        else {
                            return Object.assign(child, { clicked: false })
                        }
                    })
                    return Object.assign(data, { clicked: true, child: childData })
                }
                else {
                    if (data.child.length > 0) {
                        let childData = _.map(data.child, child => {
                            if (child.child.length > 0) {
                                let child2Data = _.map(child.child, child2 => {
                                    return Object.assign(child2, { clicked: false })
                                })
                                return Object.assign(child, { clicked: false, child: child2Data })
                            }
                            return Object.assign(child, { clicked: false })
                        })
                        return Object.assign(data, { clicked: false, child: childData })
                    }
                    else {
                        return Object.assign(data, { clicked: false })
                    }
                }
            })
            this.setState({
                active: item.linkTo,
                reload: false
            })
            this.props.updateSidebar(a)
        }
        else if (item.level === "third-level") {
            let a = _.map(this.props.sidebar, data => {
                if (_.get(_.find(data.child, { value: item.parent }), 'parent', "") === data.value) {
                    let childData = _.map(data.child, child => {
                        if (item.parent === child.value) {
                            let child2Data = _.map(child.child, child2 => {
                                if (item.value === child2.value) {
                                    return Object.assign(child2, { clicked: true })
                                }
                                else {
                                    return Object.assign(child2, { clicked: false })
                                }
                            })
                            return Object.assign(child, { clicked: true, child: child2Data })
                        }
                        else {
                            return Object.assign(child, { clicked: false })
                        }
                    })
                    return Object.assign(data, { clicked: true, child: childData })
                }
                else {
                    if (data.child.length > 0) {
                        let childData = _.map(data.child, child => {
                            if (child.child.length > 0) {
                                let child2Data = _.map(child.child, child2 => {
                                    return Object.assign(child2, { clicked: false })
                                })
                                return Object.assign(child, { clicked: false, child: child2Data })
                            }
                            return Object.assign(child, { clicked: false })
                        })
                        return Object.assign(data, { clicked: false, child: childData })
                    }
                    else {
                        return Object.assign(data, { clicked: false })
                    }
                }
            })
            this.setState({
                active: item.linkTo,
                reload: false
            })
            this.props.updateSidebar(a)
        }
    }

    handleActive = (item, location) => {
        let d = "/" + _.replace(location.href, Config.APP_URL, "")

        if (this.state.reload) {
            let item =this.findItem(this.props.sidebar,d)
            if(item !== undefined){
                this.setActive(item) 
                this.setState({
                    active: item.linkTo,
                    reload: false
                })
            }  
        }
        else if (((location.href.split("/")[location.href.split("/").length - 1] === item.linkTo.split("/")[item.linkTo.split("/").length - 1]) && item.linkTo !== this.state.active)) {
          this.setActive(item)  
        }
        return _.includes(location.href, item.linkTo)
    }

    render = () => {
        const sidebarGenerator = (sidebarData) =>
            (<ul className={sidebarData[0].level}>
                {sidebarData.map((item, index) =>
                    <li key={index} className={item.clicked === true ? "active-menu-" + item.level : ""}>
                        <NavLink to={item.linkTo} isActive={(e) => this.handleActive(item, location)} >
                            <div>
                                {sidebarData[0].level === "first-level" ? <i className="fa fa-caret-left float-right"></i> : <i className="fa fa-caret-left"></i>}
                                <label>
                                    {item.name}
                                </label>
                            </div>
                        </NavLink>
                        {(item.child.length > 0 && item.clicked === true) ?
                            sidebarGenerator(item.child) : null}
                    </li>
                )}

            </ul>)
        return (
            <div className="side_bar">
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarcontent" >
                    <i className="fa fa-bars"></i>
                </button>
            <div className="col-md-2 collapse  sidebar" id="sidebarcontent">

                <div className="sidebar-wrapper">
                    {this.props.sidebar.length > 0 && sidebarGenerator(this.props.sidebar)}
                </div>
            </div>
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBar))


