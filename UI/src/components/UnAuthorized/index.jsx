import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './style'
import { destroySession } from 'services/login/actions';

const mapDispatchToProps = dispatch => ({
    destroySession: () => dispatch(destroySession()),
})

class Logout extends Component {
    componentWillMount = () => {
        this.props.destroySession()
    }
    render = () => {
        return (
            <div>
                <div className="logout">Un Authorized</div>
                <div className="Re-login"><Link to="/"> <img src="/images/lv.jpg" /></Link></div>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Logout)