import styled from "styled-components";

const eventDetailContainer = styled.div`
  display: grid;
  width: 93%;
  grid-template-rows: 50% 50%;
`;

const eventInfoContainer = styled.div`
  margin: 0;
  display: grid;
  background-color: white;
`;

const eventMusicContainer = styled.div`
  margin: 5px 0 0 0;
  display: grid;
  background-color: white;
`;

const infoSections = styled.div`
  display: grid;
  grid-template-rows: 25% 75%;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    "header header"
    "contact box";
`;

const contact = styled.div`
  display: grid;
  margin: 0 0 0 10%;
  grid-area: contact;
  grid-template-rows: 3% 12% 3% 12% 3% 12% 3% 12% 10% 15%;
  grid-template-columns: 30% 50% 10% 10%;
  grid-template-areas:
    "... ... ... ..."
    "venueT venue ... ..."
    "... ... ... ..."
    "addressT address ... ..."
    "... ... ... ..."
    "dateT date ... ..."
    "... ... ... ..."
    "artistT artist ... ..."
    "... ... ... ..."
    "... icon ... ...";
`;

const box = styled.div`
  display: grid;
  grid-area: box;
  grid-template-rows: 3% 12% 3% 12% 20% 10% 10% 10% 10% 10%;
  grid-template-columns: 20% 20% 25% 35%;
  grid-template-areas:
    "... ... ... ..."
    "... ... startT start"
    "... ... ... ..."
    "... ... endT end"
    "... ... ... ..."
    "... ... boxImg boxImg"
    "... ... boxImg boxImg"
    "... ... boxImg boxImg"
    "... ... ... ..."
    "... ... health health";
`;

const header = styled.div`
  grid-area: header;
  color: white;
  position: relative;
  text-align: center;
  font-size: 1.3em;
`;

const headerImg = styled.img`
  text-align: center;
`;

const headerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const venueTitle = styled.div`
  grid-area: venueT;
  justify-self: start;
  align-self: center;
`;

const addressTitle = styled.div`
  grid-area: addressT;
  justify-self: start;
  align-self: center;
`;

const dateTitle = styled.div`
  grid-area: dateT;
  justify-self: start;
  align-self: center;
`;

const artistTitle = styled.div`
  grid-area: artistT;
  justify-self: start;
  align-self: center;
`;
const venue = styled.div`
  grid-area: venue;
  justify-self: start;
  align-self: center;
  font-weight: 100;
`;
const date = styled.div`
  grid-area: date;
  justify-self: start;
  align-self: center;
  font-weight: 100;
`;
const address = styled.div`
  grid-area: address;
  justify-self: start;
  align-self: center;
  font-weight: 100;
`;
const artist = styled.div`
  grid-area: artist;
  justify-self: start;
  align-self: center;
  font-weight: 100;
`;
const artistIcon = styled.img`
  grid-area: icon;
  justify-self: start;
  align-self: center;
`;

const startTimeTitle = styled.div`
  grid-area: startT;
  justify-self: start;
  align-self: center;
`;
const endtimeTitle = styled.div`
  grid-area: endT;
  justify-self: start;
  align-self: center;
`;
const boxImage = styled.img`
  grid-area: boxImg;
  justify-self: start;
  align-self: center;
`;

const startTime = styled.div`
  grid-area: start;
  justify-self: start;
  align-self: center;
  font-weight: 100;
`;
const endtime = styled.div`
  grid-area: end;
  justify-self: start;
  align-self: center;
  font-weight: 100;
`;

export {
  eventDetailContainer,
  eventInfoContainer,
  eventMusicContainer,
  infoSections,
  contact,
  box,
  header,
  headerImg,
  headerText,
  venueTitle,
  address,
  addressTitle,
  dateTitle,
  date,
  venue,
  artist,
  artistTitle,
  artistIcon,
  boxImage,
  startTimeTitle,
  endtimeTitle,
  startTime,
  endtime
};
