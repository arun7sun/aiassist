import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style'

class NoMatch extends Component {
    
    render = () => {
        return (
            <div>
                <div className="logout">404, Page Not Found</div>
                <div className="Re-login"><Link to="/"> <img src="/images/logo-login.png" /></Link></div>
            </div>
        )
    }
}

export default NoMatch