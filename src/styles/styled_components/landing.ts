import styled from "styled-components";

const landingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 560px);
  grid-template-rows: repeat(3, 280px);
  grid-template-areas:
    "... ... ..."
    "... login ..."
    "... ... ...";
  grid-auto-flow: dense;
  grid-row-start: 1em;
  margin: 0;
`;

const loginContainer = styled.div`
  display: grid;
  grid-area: login;
  grid-template-areas:
    "logo"
    "button";
  grid-auto-flow: dense;
  grid-row-start: 1em;
  margin: 0;
`;

const logo = styled.img`
  grid-area: logo;
  justify-self: center;
  align-self: center;
  margin: 0;
`;

const loginButton = styled.div`
  align-self: center;
  text-align: center;
  line-height: 35px;
  width: 100px;
  height: 35px;
  justify-self: center;
  font-size: 0.9em;
  border: 1px solid black;
  &:focus {
    outline: 0;
  }
  &:hover {
    background: black;
    color: white;
    cursor: pointer;
  }
  &:active {
    color: black;
    background: white;
  }
  grid-area: button;
`;

export { landingContainer, loginContainer, logo, loginButton };
