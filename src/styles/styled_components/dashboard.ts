import styled from "styled-components";

const mainContainer = styled.div`
  display: grid;
  background: #e4e6eb;
`;

const dashContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 0.25fr);
  grid-template-rows: 100px repeat(2, 400px);
  grid-template-areas:
    "header header header header header header header header header header header header header header header header"
    "nav nav nav nav event event event detail detail detail detail detail detail detail detail detail"
    "nav nav nav nav event event event detail detail detail detail detail detail detail detail detail";
  grid-auto-flow: dense;
  grid-row-gap: 2em;
  grid-column-gap: 5px;
  grid-row-start: 1em;
  margin: 2em 0 2em 0;
`;

const headerContainer = styled.div`
  text-align: center;
  font-size: 3rem;
  background-color: white;
  grid-area: header;
  /* box-shadow: 20px 10px 50px 10px lightgrey; */
`;

const sidebar = styled.div`
  display: grid;
  grid-area: nav;
`;

const eventContainer = styled.div`
  text-align: center;
  background-color: white;
  grid-area: event;
`;

const detailsContainer = styled.div`
  text-align: center;
  font-size: 3rem;
  background-color: white;
  grid-area: detail;
  width: 93%;
`;

export {
  dashContainer,
  detailsContainer,
  eventContainer,
  mainContainer,
  sidebar,
  headerContainer
};
