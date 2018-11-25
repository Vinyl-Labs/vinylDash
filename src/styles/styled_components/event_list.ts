import styled from "styled-components";

const eventList = styled.div`
  margin: 0;
  height: auto;
  background: white;
  grid-auto-rows: auto;
  overflow: scroll;
`;

const event = styled.div`
  display: grid;
  font-size: 1em;
  height: 80px;
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
  grid-template-columns: 10% 30% 30 30%;
  grid-template-rows: 35% 10% 10% 10% 35%;
  overflow: hidden;
  cursor: pointer;
  grid-template-areas:
    "tab ... ... ..."
    "tab title ... ..."
    "tab ... ... date"
    "tab info ... ..."
    "tab ... ... ...";
`;

const eventDate = styled.div`
  grid-area: date;
  justify-self: center;
  align-self: center;
  margin: 0;
  font-weight: 100;
`;

const eventTitle = styled.p`
  justify-self: start;
  align-self: end;
  margin: 0;
  grid-area: title;
`;
const eventInfo = styled.p`
  align-self: start;
  justify-self: start;
  margin: 0;
  grid-area: info;
  font-weight: 100;
`;
const accentTab = styled.div`
  background: black;
  grid-area: tab;
  width: 25%;
`;

export { event, eventInfo, eventTitle, eventList, eventDate, accentTab };
