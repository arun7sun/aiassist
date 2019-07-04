import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from 'store';
import _isEmpty from 'lodash/isEmpty';
import queryString from 'query-string'
import Loader from 'components/Loader'

import { login, destroySessionOnInvalidToken } from 'services/login/actions';

const mapStateToProps = (state, ownProps) => ({
    user: state.login.user,
    error: state.login.errormessage
});

const mapDispatchToProps = dispatch => ({
    login: (token,isAuth) => dispatch(login(token,isAuth)),

});
class Login extends Component {

    componentWillMount = () => {
        const queryParam = queryString.parse(location.search)
        if (!_isEmpty(queryParam)) {
            const isAuth = queryParam.isAuth;
                if(isAuth==="true"){
                    this.props.login(queryParam.token,isAuth);
                }
                else{
                    this.props.history.push('/unauthorized');
                } 
        }
        else {
            store.dispatch(destroySessionOnInvalidToken());
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props.location.query !== nextProps.location.query) {
            const queryParam = location.query;
            if (!_isEmpty(queryParam)) {
                const isAuth = queryParam.isAuth;
                if(isAuth==="true"){
                    this.props.login(queryParam.token,isAuth);
                }
                else{
                    nextProps.history.push('/unauthorized');
                } 
            }
            else {
                store.dispatch(destroySessionOnInvalidToken());
            }
        }
        if (!_isEmpty(nextProps.user) && this.props.user !== nextProps.user) {
            nextProps.history.push('/dashboard');
        }
    }

    render = () => {
        return (<div className="login-loader"><Loader type="spin" color="#aaa" delay={5} /></div>)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
