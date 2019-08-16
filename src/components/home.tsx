import * as React from "react";
import { Route } from "react-router";
import routes from "src/helpers/routes";
import { HomeContainer } from "src/styles/styled_components/home";

function Home() {
  return (
    <HomeContainer>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={true}
          component={route.main}
        />
      ))}
    </HomeContainer>
  );
}

export { Home };
