import * as React from "react";
import { ArtistsContentContainer } from "src/styles/styled_components/artists_content";
import ArtistCard from "./common/artist_card";

function ArtistsContent() {
  // TODO: Relplace with real dj data
  const artists = [1, 2, 3, 4, 5, 6, 7, 8];

  const renderArtists = artists.map(card => {
    return <ArtistCard key={card} />;
  });

  return <ArtistsContentContainer>{renderArtists}</ArtistsContentContainer>;
}

export { ArtistsContent };
