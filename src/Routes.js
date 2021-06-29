import { Switch, Route } from 'react-router-dom';
import React  from "react";
import Home from "./Components/Home.js";
import NotFound from "./Components/NotFound";


/** All routes of website along with a catch all route to display a not found route */

function Routes() {
  return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route><NotFound/></Route>
        </Switch>
  );
}

export default Routes;
