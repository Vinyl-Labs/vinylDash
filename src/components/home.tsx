import * as React from "react";
import { HomeContainer } from "src/styles/styled_components/home";
import { Artists } from "./artists";

function Home() {
  return (
    <HomeContainer>
      {/* TODO: Add Routes */}
      <Artists />
    </HomeContainer>
  );
}

export { Home };
