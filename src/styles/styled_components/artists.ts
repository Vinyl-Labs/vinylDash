import styled from "styled-components";

const ArtistsContainer = styled.div`
  display: grid;
  height: 100%;
  width: auto;
  align-self: center;
  grid-template-rows: 15% 20% 20% 20% 25%;
  grid-template-columns: auto 1200px auto;
  grid-template-areas:
    "... subNav ..."
    "... content ..."
    "... content ..."
    "... content ..."
    "... content ...";
`;

export { ArtistsContainer };
