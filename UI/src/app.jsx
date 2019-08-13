import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import _ from "lodash";
import { loadState } from "helpers/LocalStorage";
import { store } from "store";

import Root from "components/Root";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Root} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
