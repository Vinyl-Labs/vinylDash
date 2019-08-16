import * as React from "react";
import { ArtistsContainer } from "src/styles/styled_components/artists";
import { ArtistsContent } from "./artists_content";
import { SubNav } from "./sub_nav";

function Artists() {
  return (
    <ArtistsContainer>
      <SubNav />
      <ArtistsContent />
    </ArtistsContainer>
  );
}

export { Artists };
