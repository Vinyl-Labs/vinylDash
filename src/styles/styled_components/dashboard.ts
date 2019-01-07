import styled from "styled-components";

const mainContainer = styled.div`
  display: grid;
  background: #f4f8f9;
  height: 100%;
`;

const dashContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 0.25fr);
  grid-template-rows: 80px repeat(2, 420px);
  grid-template-areas:
    "nav header header header header header header header header header header header header header header header"
    "nav content content content content content content content content content content content content event event event"
    "nav content content content content content content content content content content content content event event event";
  grid-auto-flow: dense;
  grid-row-start: 1em;
  margin: 0;
`;

const eventContainer = styled.div`
  display: grid;
  grid-area: event;
  background: white;
  border: lightgray;
  border-left-width: 0.5px;
  border-left-style: solid;
`;

const headerContainer = styled.div`
  display: grid;
  text-align: center;
  font-size: 3rem;
  background-color: white;
  grid-area: header;
  border: lightgray;
  border-bottom-width: 0.5px;
  border-bottom-style: solid;
  /* box-shadow: 20px 10px 50px 10px lightgrey; */
`;

const sidebar = styled.div`
  display: grid;
  grid-area: nav;
  background: white;
  border: lightgray;
  border-right-width: 0.5px;
  border-right-style: solid;
`;

export {
  mainContainer,
  dashContainer,
  sidebar,
  headerContainer,
  eventContainer
};
