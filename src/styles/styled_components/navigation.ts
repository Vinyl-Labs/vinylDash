import styled from "styled-components";

const navContainer = styled.div`
  margin: 2em 0 0 0;
  align-self: start;
  justify-self: center;
  height: auto;
  width: 65%;
  background: white;
  box-shadow: 20px 20px 50px 10px lightgrey;
`;

const navItem = styled.div`
  display: grid;
  font-size: 1.5em;
  height: 70px;
  color: #4a4a4a;
  border-bottom: 0.05em solid lightgray;
  &:focus {
    outline: 0;
  }
  &:hover {
    background: #ececec;
  }
  &:active {
    background: white;
  }
  grid-template-columns: 40% 60%;
  overflow: hidden;
`;

const navIcon = styled.img`
  justify-self: center;
  align-self: center;
  margin: 0;
`;
const navText = styled.p`
  align-self: center;
  justify-self: start;
  margin: 0;
`;

export { navContainer, navItem, navIcon, navText };
