import * as React from "react";
import images from "src/styles/images";
import * as S from "./../styles/styled_components/event_content";

class EventContent extends React.Component {
  public render() {
    const track = [
      { id: "1", name: "Distance", artist: "Slay The Sensei" },
      { id: "2", name: "Pieces Lost", artist: "Judas" },
      { id: "3", name: "American Funeral", artist: "Alex Da Kid" },
      { id: "4", name: "Way down we go", artist: "Kaleo" },
      { id: "5", name: "Primetime", artist: "Janet Monet" }
    ];

    const trackList = track.map(t => (
      <S.track key={t.id}>
        <S.trackDetails>
          <S.trackTitle>{t.name}</S.trackTitle>
          <S.trackArtist>{t.artist}</S.trackArtist>
        </S.trackDetails>
        <S.playback>
          <S.playButton src={images.events.playButton} />
        </S.playback>
      </S.track>
    ));

    return (
      <S.ContentContainer>
        <S.contentHeader>
          <S.EventDetails>
            <S.eventTime>10:00pm-5:00am</S.eventTime>
            <S.eventTitle>Eggs Over Yeezy</S.eventTitle>
            <S.eventInfo>Troop</S.eventInfo>
          </S.EventDetails>
          <S.EventSwitch />
        </S.contentHeader>
        <S.contentBody>
          <S.userWidget>
            <S.MainText>Number of Users</S.MainText>
            <S.Count color={"lightBlue"}>0</S.Count>
            <S.SubText>checked in</S.SubText>
          </S.userWidget>
          <S.requestWidget>
            <S.MainText>Total Requests</S.MainText>
            <S.Count color={"salmon"}>0</S.Count>
            <S.SubText>songs requested</S.SubText>
          </S.requestWidget>
          <S.boxWidget>
            <S.widgetTitle color={"salmon"}>Box</S.widgetTitle>
            <S.genre>
              <S.genreTitle>Top Genre</S.genreTitle>
              <S.genreInfo>Hip Hop</S.genreInfo>
            </S.genre>
            <S.status title={"internetStatus"} color={"#b8e986"} />
            <S.status title={"audioStatus"} color={"#b8e986"} />
            <S.status title={"onlineStatus"} color={"#b8e986"} />
            <S.status title={"limitStatus"} color={"#D8D8D8"} />
            <S.statusText title={"internet"}>Internet</S.statusText>
            <S.statusText title={"audio"}>Audio Detected</S.statusText>
            <S.statusText title={"online"}>Online</S.statusText>
            <S.statusText title={"limit"}>Limit Reached</S.statusText>
            <S.boxIcon src={images.events.box} />
            <S.boxId>ID: V-4676654</S.boxId>
          </S.boxWidget>
          <S.djWidget>
            <S.widgetTitle color={"#7EAFE8"}>DJ</S.widgetTitle>
            <S.noData>No DJ Booked</S.noData>
          </S.djWidget>
          <S.trackWidget>
            <S.widgetTitle color={"#4A4A4A"}>Tracklist</S.widgetTitle>
            <S.tracklist>{trackList}</S.tracklist>
          </S.trackWidget>
        </S.contentBody>
      </S.ContentContainer>
    );
  }
}

export default EventContent;