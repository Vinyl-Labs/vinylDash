import * as React from "react";
import { Route } from "react-router";
import { HomeContainer } from "src/styles/styled_components/home";
import { Artists } from "./artists";

function Home() {
  return (
    <HomeContainer>
      <Route exact={true} path="/" component={Artists} />
    </HomeContainer>
  );
}

export { Home };
