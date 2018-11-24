import styled from "styled-components";

const headerContent = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-areas: "logo ... ... profile";
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
`;

export { headerContent, logo, profile, profileContainer, profileText };
