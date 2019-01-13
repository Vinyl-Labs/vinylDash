import * as React from "react";
import { IEvent } from "src/helpers/events";
import EventContainer, { IEventState } from "src/state/containers/event_state";
import { Container, Subscribe } from "unstated";
import * as S from "../styles/styled_components/event_list";

function EventList(): JSX.Element {
  function List(events: IEvent[]) {
    return events.map(e => (
      <S.event key={e.title}>
        <S.eventTitle>{e.title}</S.eventTitle>
        <S.eventInfo>{e.venue}</S.eventInfo>
        <S.eventDate>{e.date}</S.eventDate>
      </S.event>
    ));
  }

  const eventList = (
    <Subscribe to={[EventContainer]}>
      {(events: Container<IEventState>) => (
        <S.eventList>
          <S.eventTab />
          {events.state.events.map(e => List(e)).getOrElse(null)}
        </S.eventList>
      )}
    </Subscribe>
  );

  return eventList;
}

export default EventList;
