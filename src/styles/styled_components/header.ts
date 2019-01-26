import styled from "styled-components";

const headerContent = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-areas: "logo ... create profile";
`;

const logo = styled.img`
  grid-area: logo;
  justify-self: center;
  align-self: center;
  margin: 0;
`;

const profileContainer = styled.div`
  grid-area: profile;
  display: grid;
  grid-template-columns: 40% 60%;
`;

const profile = styled.img`
  justify-self: end;
  align-self: center;
  margin: 0;
`;

const profileText = styled.p`
  align-self: center;
  justify-self: start;
  margin: 0 0 0 15px;
  font-size: 0.35em;
  &:focus {
    outline: 0;
  }
  &:hover {
    color: blue;
    cursor: pointer;
  }
  &:active {
    color: #e4e6eb;
  }
`;
const createEventButton = styled.div`
  align-self: center;
  justify-self: end;
  font-size: 0.35em;
  &:focus {
    outline: 0;
  }
  &:hover {
    color: blue;
    cursor: pointer;
  }
  &:active {
    color: #e4e6eb;
  }
  grid-area: create;
`;

export {
  headerContent,
  logo,
  profile,
  profileContainer,
  profileText,
  createEventButton
};
