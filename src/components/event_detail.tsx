import * as React from "react";
import images from "src/styles/images";
import * as S from "../styles/styled_components/event_detail";

function EventDetail(): JSX.Element {
  const eventDetail = (
    <S.eventDetailContainer>
      <S.eventInfoContainer>
        <S.infoSections>
          <S.header>
            <S.headerImg src={images.detail.header} />
            <S.headerText>Bounce House</S.headerText>
          </S.header>
          <S.contact>
            <S.venueTitle>Venue:</S.venueTitle>
            <S.addressTitle>Address:</S.addressTitle>
            <S.artistTitle>Artist:</S.artistTitle>
            <S.dateTitle>Date:</S.dateTitle>
            <S.venue>Bounce House</S.venue>
            <S.address>23 Mount Ave</S.address>
            <S.date>11/22/18</S.date>
            <S.artist>DJ Slick Vick</S.artist>
            <S.artistIcon src={images.detail.artistIcon} />
          </S.contact>
          <S.box>
            <S.startTimeTitle>Start Time</S.startTimeTitle>
            <S.endtimeTitle>End Time</S.endtimeTitle>
            <S.startTime>10:00pm</S.startTime>
            <S.endtime>4:00am</S.endtime>
            <S.boxImage src={images.detail.box} />
          </S.box>
        </S.infoSections>
      </S.eventInfoContainer>
      <S.eventMusicContainer />
    </S.eventDetailContainer>
  );

  return eventDetail;
}

export default EventDetail;
