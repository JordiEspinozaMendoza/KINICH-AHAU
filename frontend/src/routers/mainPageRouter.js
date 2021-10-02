import React from "react";
import { Route, Switch } from "react-router-dom";

// ? Components
import { navigationBar } from "components/navigationBar";
import { mainPageRoutes as routes } from "routes/mainPageRoutes";
export const StoreRouter = () => {
  return (
    <>
      <NavigationBar />
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
      <Footer />
    </>
  );
};
