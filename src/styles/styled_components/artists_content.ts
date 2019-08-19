import styled from "styled-components";
import MainTheme from "../themes";

const ArtistsContentContainer = styled.div`
  display: flex;
  background-color: ${MainTheme.colors.backGroundWhite};
  height: 100%;
  width: 100%;
  grid-area: content;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
`;

export { ArtistsContentContainer };
