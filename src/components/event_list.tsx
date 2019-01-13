import * as React from "react";
import { IEvent } from "src/helpers/events";
import EventContainer, { IEventState } from "src/state/containers/event_state";
import { Container, Subscribe } from "unstated";
import * as S from "../styles/styled_components/event_list";

interface IEventListProps {
  eventsContext: Container<IEventState>;
}

class EventList extends React.Component<IEventListProps> {
  public componentDidMount() {
    // @ts-ignore
    this.props.eventsContext.getEvents();
  }
  public List(events: IEvent[]) {
    return events.map(e => (
      <S.event key={e.title}>
        <S.eventTitle>{e.title}</S.eventTitle>
        <S.eventInfo>{e.venue}</S.eventInfo>
        <S.eventDate>{e.date}</S.eventDate>
      </S.event>
    ));
  }
  public render() {
    const eventList = (
      <Subscribe to={[EventContainer]}>
        {(events: Container<IEventState>) => (
          <S.eventList>
            <S.eventTab />
            {events.state.events.map(e => this.List(e)).getOrElse(null)}
          </S.eventList>
        )}
      </Subscribe>
    );

    return eventList;
  }
}

export default EventList;
