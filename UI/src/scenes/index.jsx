import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import "./style";

import { connect } from 'react-redux';



const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
    
});


class Dashboard extends Component {


    render = () => {
        return (
            <div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

