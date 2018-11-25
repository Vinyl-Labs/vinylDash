import styled from "styled-components";

const mainContainer = styled.div`
  display: grid;
  background: #e4e6eb;
  height: 100%;
`;

const dashContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 0.25fr);
  grid-template-rows: 80px repeat(2, 400px);
  grid-template-areas:
    "header header header header header header header header header header header header header header header header"
    "... nav nav nav nav event event event detail detail detail detail detail detail detail ..."
    "... nav nav nav nav event event event detail detail detail detail detail detail detail ...";
  grid-auto-flow: dense;
  grid-row-gap: 2em;
  grid-column-gap: 5px;
  grid-row-start: 1em;
  margin: 2em 0 2em 0;
`;

const eventContainer = styled.div`
  display: grid;
  grid-area: event;
`;

const headerContainer = styled.div`
  display: grid;
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

const detailsContainer = styled.div`
  grid-area: detail;
  display: grid;
`;

export {
  dashContainer,
  detailsContainer,
  mainContainer,
  sidebar,
  headerContainer,
  eventContainer
};
