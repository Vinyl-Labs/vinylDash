import styled from "styled-components";
import MainTheme from "../themes";

const HomeContainer = styled.div`
  display: grid;
  background: ${MainTheme.colors.backGroundWhite};
  height: 100%;
  width: 100%;
  grid-area: home;
`;

export { HomeContainer };
