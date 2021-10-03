import React from "react";
import { Route, Switch } from "react-router-dom";

// ? Components
import { mainPageRoutes as routes } from "routes/mainPageRoutes";
import { NavigationBar } from "components";
import ToastAlert from "components/ToastAlert";
export const MainPageRouter = () => {
  return (
    <>
      <NavigationBar />
      <ToastAlert/>
      <React.Suspense
        fallback={
          <div className="loading_container">
          </div>
        }
      >
        <Switch>
          {routes.map((route, index) => {
            return route.component ? (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => <route.component {...props} />}
              />
            ) : null;
          })}
        </Switch>
      </React.Suspense>
    </>
  );
};
