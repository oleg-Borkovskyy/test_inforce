import React from "react";
import { Route, Switch } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../router/router";

function AppRouter(props) {
  const isAuth=true
  return isAuth ? (
    <Switch>
      {privateRoutes.map(route => (
        <Route 
          key={route}
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          key={route}
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
    </Switch>
  );
}

export default AppRouter;