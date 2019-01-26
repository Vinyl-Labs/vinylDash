import * as React from "react";
import { IEvent } from "src/helpers/events";
import EventContext, { IEventContext } from "src/state/containers/event_state";
import { Container, Subscribe } from "unstated";
import * as S from "../styles/styled_components/event_list";

function EventList() {
  function selectEvent(container: Container<IEventContext>, id: string) {
    const selectedEvent = container.state.events
      .map(event => event.find(e => e.id === id))
      .getOrElse(null);

    // @ts-ignore
    container.selectEvent(selectedEvent);
  }

  function List(events: IEvent[], container: Container<IEventContext>) {
    return events.map(e => (
      // @ts-ignore
      // tslint:disable-next-line:jsx-no-lambda
      <S.event key={e.id} onClick={() => selectEvent(container, e.id)}>
        <S.eventTitle>{e.title}</S.eventTitle>
        <S.eventInfo>{e.venue}</S.eventInfo>
        <S.eventDate>{e.date}</S.eventDate>
      </S.event>
    ));
  }
  const eventList = (
    <Subscribe to={[EventContext]}>
      {(eventContainer: Container<IEventContext>) => (
        <S.eventList>
          {/* <S.eventTab /> */}
          {eventContainer.state.events
            .map(event => List(event, eventContainer))
            .getOrElse(null)}
        </S.eventList>
      )}
    </Subscribe>
  );

  return eventList;
}

export default EventList;
