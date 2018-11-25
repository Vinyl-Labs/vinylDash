import * as React from "react";
import * as S from "../styles/styled_components/event_list";

function EventList(): JSX.Element {
  const eventList = (
    <S.eventList>
      <S.event>
        <S.eventTitle>Bounce House</S.eventTitle>
        <S.eventInfo>Aurora</S.eventInfo>
        <S.eventDate>Now</S.eventDate>
      </S.event>
      <S.event>
        <S.eventTitle>The Rub</S.eventTitle>
        <S.eventInfo>Strand Theater</S.eventInfo>
        <S.eventDate>Today</S.eventDate>
      </S.event>
      <S.event>
        <S.eventTitle>Eggs over Yeezy</S.eventTitle>
        <S.eventInfo>Zeke's BBQ</S.eventInfo>
        <S.eventDate>Past</S.eventDate>
      </S.event>
    </S.eventList>
  );

  return eventList;
}

export default EventList;
