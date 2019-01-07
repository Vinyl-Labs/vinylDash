import * as React from "react";
import { IEvent } from "src/helpers/events";
import * as S from "../styles/styled_components/event_list";

function EventList(): JSX.Element {
  const events: IEvent[] = [
    { date: "Now", title: "Eggs Over Yeezy", venue: "Troop" },
    { date: "12/22", title: "Bounce House", venue: "Aurora" }
  ];

  const list = events.map(e => {
    return (
      <S.event key={e.title}>
        <S.eventTitle>{e.title}</S.eventTitle>
        <S.eventInfo>{e.venue}</S.eventInfo>
        <S.eventDate>{e.date}</S.eventDate>
      </S.event>
    );
  });

  const eventList = (
    <S.eventList>
      <S.eventTab />
      {list}
    </S.eventList>
  );

  return eventList;
}

export default EventList;
