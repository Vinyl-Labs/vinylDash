import styled from "styled-components";
import MainTheme from "../themes";

const MainContainer = styled.div`
  display: grid;
  background-color: ${MainTheme.colors.backGroundWhite};
  width: 100vw;
  height: 100vh;
  grid-template-columns: auto auto auto auto 230px;
  grid-template-rows: 70px auto 70px;
  grid-template-areas:
    "header header header header header"
    "home home home home sideBar"
    "home home home home sideBar";
`;

export { MainContainer };
