import styled from "styled-components";

const navContainer = styled.div`
  display: grid;
  align-self: start;
  justify-self: center;
  height: auto;
  width: 100%;
  grid-template-areas:
    "logo"
    "..."
    "..."
    "..."
    "..."
    "nav"
    "nav"
    "nav"
    "nav"
    "nav"
    "nav"
    "nav"
    "nav"
    "nav"
    "nav"
    "nav";
`;

const navItem = styled.div`
  display: grid;
  height: 70px;
  border-left: 5px solid white;

  &:focus {
    outline: 0;
  }
  &:hover {
    border-left: 5px solid black;
  }
  &:active {
    border-left: 5px solid white;
  }
  overflow: hidden;
  cursor: pointer;
`;
const logo = styled.div`
  grid-area: logo;
  justify-self: center;
  align-self: start;
  height: 140px;
`;

const navIcon = styled.img`
  justify-self: center;
  align-self: center;
  margin: 0;
`;

const logoIcon = styled.img`
  margin: 20px 0px 0px 0px;
`;

export { navContainer, navItem, navIcon, logo, logoIcon };
