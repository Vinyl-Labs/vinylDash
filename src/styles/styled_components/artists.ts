import styled from "styled-components";

const ArtistsContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  align-self: center;
  grid-template-rows: 15% 20% 20% 20% 25%;
  grid-template-columns: auto 1100px auto;
  grid-template-areas:
    "... subNav ..."
    "... content ..."
    "... content ..."
    "... content ..."
    "... content ...";
  overflow: scroll;
`;

export { ArtistsContainer };
