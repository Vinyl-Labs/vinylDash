import styled from "styled-components";

const ContentContainer = styled.div`
  grid-area: content;
  display: grid;
  grid-template-rows: 17% 66% 17%;
  margin-right: 3em;
  grid-template-areas: "header" "body" "...";
`;

const contentHeader = styled.div`
  grid-area: header;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-template-areas: "details ... switch ";
  grid-column-gap: 10px;
`;

const contentBody = styled.div`
  grid-area: body;
  display: grid;
  grid-column-gap: 2em;
  margin: 0 3em 0 3em;
  grid-template-rows: 25% 15% 35% 25%;
  grid-template-columns: 33% 33% 33%;

  grid-template-areas:
    "users requests box"
    "... ... box"
    "dj tracks box"
    "dj tracks box";
`;

const userWidget = styled.div`
  display: grid;
  background: white;
  grid-area: users;
  grid-template-columns: 10% 10% 10 10% 10% 10% 10% 10 10% 10%;
  grid-template-rows: 50%, 50%;
  grid-template-areas:
    "... mainText mainText mainText mainText ... ... ... ... ..."
    "... count subText subText subText ... ... ... ... ...";
  grid-row-gap: 10px;
  margin: 5px;
`;

const MainText = styled.div`
  grid-area: mainText;
  font-family: "Montserrat", sans-serif;
  justify-self: start;
  align-self: end;
`;
const Count = styled.div`
  grid-area: count;
  font-family: "Montserrat", sans-serif;
  font-size: 2em;
  color: ${props => props.color};
`;

const SubText = styled.div`
  grid-area: subText;
  font-family: "Montserrat", sans-serif;
  color: lightgray;
`;

const requestWidget = styled.div`
  display: grid;
  background: white;
  grid-area: requests;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: 50%, 50%;
  grid-template-areas:
    "... mainText mainText mainText mainText ... ... ... ... ..."
    "... count subText subText subText ... ... ... ... ...";
  grid-row-gap: 10px;
  margin: 5px;
`;

const djWidget = styled.div`
  display: grid;
  background: white;
  grid-area: dj;
  grid-template-columns: repeat(8, 12.5%);
  grid-template-rows: 22px repeat(20, 5%);
  grid-template-areas:
    "title title ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... noData noData noData noData ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ...";
`;

const trackWidget = styled.div`
  display: grid;
  background: white;
  grid-area: tracks;
  grid-template-columns: repeat(8, 12.5%);
  grid-template-rows: 22px repeat(4, 60px);
  grid-template-areas:
    "title title ... ... ... ... ... ..."
    "... tracklist tracklist tracklist tracklist tracklist tracklist ..."
    "... tracklist tracklist tracklist tracklist tracklist tracklist ..."
    "... tracklist tracklist tracklist tracklist tracklist tracklist ..."
    "... tracklist tracklist tracklist tracklist tracklist tracklist ..."
    "... tracklist tracklist tracklist tracklist tracklist tracklist ...";
`;

const tracklist = styled.div`
  display: grid;
  grid-row-gap: 1.2em;
  grid-area: tracklist;
  margin: 1.2em;
  overflow: scroll;
`;

const track = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 80% 20%;
  grid-template-areas: "details playback";
  border: 1px solid #d7e2ed;
  height: 50px;
`;

const playback = styled.div`
  display: grid;
  grid-area: playback;
  background: #f4f7f9;
  cursor: pointer;
`;

const trackDetails = styled.div`
  display: grid;
  height: 100%;
  grid-area: details;
  border-right: 1px solid #d7e2ed;
  grid-template-columns: 10% 30% 30 30%;
  grid-template-rows: 35% 10% 10% 10% 35%;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;

  grid-template-areas:
    "... ... ... ..."
    "... title ... ..."
    "... ... ... ..."
    "... artist ... ..."
    "... ... ... ...";
`;

const trackTitle = styled.p`
  justify-self: start;
  align-self: end;
  margin: 0;
  grid-area: title;
`;
const trackArtist = styled.p`
  align-self: start;
  justify-self: start;
  margin: 0;
  grid-area: artist;
  font-weight: 100;
  font-size: 0.8em;
`;

const playButton = styled.img`
  align-self: center;
  justify-self: center;
`;

const boxWidget = styled.div`
  display: grid;
  background: white;
  grid-area: box;
  grid-template-columns: repeat(8, 12.5%);
  grid-template-rows: 22px repeat(20, 5%);
  grid-template-areas:
    "title title ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... genre genre genre ... ... ... ..."
    "... genre genre genre ... ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... internetStatus internet internet internet ... ... ..."
    "... audioStatus audio audio audio ... ... ..."
    "... onlineStatus online online online ... ... ..."
    "... limitStatus limit limit limit ... ... ..."
    "... ... ... ... ... ... ... ..."
    "... ... ... img img ... ... ..."
    "... ... ... img img ... ... ..."
    "... ... ... img img ... ... ..."
    "... ... ... img img ... ... ..."
    "... ... ... img img ... ... ..."
    "... ... ... img img ... ... ..."
    "... ... ... img img ... ... ..."
    "... ... id id id id ... ..."
    "... ... ... ... ... ... ... ...";
`;

const widgetTitle = styled.div`
  display: grid;
  grid-area: title;
  background: ${props => props.color};
  text-align: center;
  padding-top: 1px;
  font-family: "Montserrat", sans-serif;
  color: white;
  font-weight: 100;
`;

const genre = styled.div`
  display: grid;
  grid-area: genre;
  grid-template-rows: 50% 50%;
  grid-template-areas:
    "title"
    "info";
`;

const genreTitle = styled.p`
  font-size: 1.5em;
  justify-self: start;
  align-self: end;
  margin: 0;
  grid-area: title;
  font-weight: 100;
  font-family: "Montserrat", sans-serif;
`;
const genreInfo = styled.p`
  font-size: 1em;
  align-self: start;
  justify-self: start;
  margin: 0;
  grid-area: info;
  font-weight: 100;
  font-family: "Montserrat", sans-serif;
`;

const status = styled.div`
  grid-area: ${props => props.title};
  background: ${props => props.color};
  border-radius: 100%;
  width: 20px;
  height: 20px;
  font-size: 1.5em;
`;

const statusText = styled.div`
  grid-area: ${props => props.title};
  font-family: "Montserrat", sans-serif;
`;

const EventDetails = styled.div`
  grid-area: details;
  display: grid;
  grid-template-columns: 10% 30% 30 30%;
  grid-template-rows: 35% 10% 10% 10% 35%;
  grid-template-areas:
    "... time ... ..."
    "... ... ... ..."
    "... title ... ..."
    "... info ... ..."
    "... ... ... ...";
`;
const eventTime = styled.div`
  grid-area: time;
  margin: 0;
  font-weight: 100;
  align-self: end;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 5px;
`;

const eventTitle = styled.p`
  font-size: 2em;
  justify-self: start;
  align-self: end;
  margin: 0;
  grid-area: title;
  font-weight: 100;
  font-family: "Montserrat", sans-serif;
`;
const eventInfo = styled.p`
  font-size: 1.5em;
  align-self: start;
  justify-self: start;
  margin: 0;
  grid-area: info;
  font-weight: 100;
  font-family: "Montserrat", sans-serif;
`;

const EventSwitch = styled.div`
  grid-area: switch;
`;

const noData = styled.div`
  grid-area: noData;
  align-self: center;
  justify-self: center;
  font-size: 1em;
  font-family: "Montserrat", sans-serif;
  color: lightgray;
`;

const boxId = styled.div`
  grid-area: id;
  margin-bottom: 5px;
  align-self: center;
  justify-self: center;
  font-weight: 100;
  font-family: "Montserrat", sans-serif;
`;

const boxIcon = styled.img`
  grid-area: img;
  align-self: center;
  justify-self: center;
`;

export {
  ContentContainer,
  contentHeader,
  contentBody,
  EventDetails,
  EventSwitch,
  eventTitle,
  eventInfo,
  eventTime,
  userWidget,
  requestWidget,
  trackWidget,
  djWidget,
  boxWidget,
  SubText,
  Count,
  MainText,
  widgetTitle,
  genre,
  genreInfo,
  genreTitle,
  status,
  statusText,
  boxIcon,
  boxId,
  noData,
  tracklist,
  trackDetails,
  playback,
  track,
  trackArtist,
  trackTitle,
  playButton
};
