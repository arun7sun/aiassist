import React from 'react';
import { Switch, Route } from 'react-router-dom';

import "./style";

import Header from 'components/Header';

import Dashboard from 'scenes';


const Root = (props) => {
    return (
        <div className="section">
            <Header />
            {/* <header>
                <nav className="navbar navbar-expand-md  navbar-dark fixed-top">
                    <a className="navbar-brand" href="#"><img src="images/Walmart_Logo.png" /> Giving Dashboard</a>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <Header />
                    </div>
                </nav>
            </header>*/}
            {/* <div className='main-body'>
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </div>  */}
        </div>
    )
}

export default Root;