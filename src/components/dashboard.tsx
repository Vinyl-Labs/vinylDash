import * as React from "react";
import { IEvent } from "src/helpers/events";
import { IUser } from "src/helpers/users";
import EventState, { IEventState } from "src/state/containers/event_state";
import { Container, Subscribe } from "unstated";
import * as S from "./../styles/styled_components/dashboard";
import EventContent from "./event_content";
import EventList from "./event_list";
import Header from "./header";
import Navigation from "./navigation";

interface IDashboardProps {
  user: IUser;
}

function Dashboard(props: IDashboardProps) {
  return (
    <Subscribe to={[EventState]}>
      {(eventsContext: Container<IEventState>) => (
        <S.mainContainer>
          <S.dashContainer>
            <S.headerContainer>
              <Header />
            </S.headerContainer>
            <S.sidebar>
              <Navigation />
            </S.sidebar>
            <S.eventContainer>
              <EventList />
            </S.eventContainer>
            {eventsContext.state.selectedEvent
              .map((event: IEvent) => (
                <EventContent event={event} eventContext={eventsContext} />
              ))
              .getOrElse(null)}
          </S.dashContainer>
        </S.mainContainer>
      )}
    </Subscribe>
  );
}

export default Dashboard;
