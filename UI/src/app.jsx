import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import _ from 'lodash'
import { loadState } from 'helpers/LocalStorage';
import { store } from 'store';

// import Login from 'components/Login';
// import Logout from 'components/Logout';
import Root from 'components/Root';
// import Footer from 'components/Footer';
// import NoMatch from 'components/NoMatch'



const App = () => {
    return (
        <Provider store={store}>
            {/* <Router history={history}> */}
                <Router >
                <Switch>
                <Route exact path="/" component={Root} />
                    {/* <Route exact path="/" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    <Route path="/dashboard" render={() => (
                        (loadState() === undefined) ? (
                            <Redirect to="/" />
                        ) : (<Root />))}
                    />
                    <Route exact path="/unauthorized" component={Logout} />
                    <Route exact path="*" render={() => (
                        (loadState() === undefined) ? (
                            <Redirect to="/" />
                        ) : (<NoMatch />))}
                    />  */}
                </Switch>
            </Router>
        </Provider>
    )
}

export default App;