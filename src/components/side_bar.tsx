import * as React from "react";
import { Route } from "react-router";
import routes from "src/helpers/routes";
import { SideBarContainer } from "src/styles/styled_components/side_bar";

function SideBar() {
  return (
    <SideBarContainer>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={true}
          component={route.sidebar}
        />
      ))}
    </SideBarContainer>
  );
}

export { SideBar };
