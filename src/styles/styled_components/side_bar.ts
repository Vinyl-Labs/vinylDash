import styled from "styled-components";
import MainTheme from "../themes";

const SideBarContainer = styled.div`
  display: grid;
  color: black;
  background-color: ${MainTheme.colors.backGroundWhite};
  width: 100%;
  height: 100%;
  border-left-style: solid;
  border-width: 1px;
  border-color: lightgray;
  grid-area: sideBar;
  grid-template-rows: 40% 60%;
  grid-template-areas:
    "..."
    "chat";
`;

export { SideBarContainer };
