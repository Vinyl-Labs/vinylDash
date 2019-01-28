import { Maybe } from "ramda-fantasy";
import * as React from "react";
import EventState, { IEventState } from "src/state/containers/event_state";
import { Container, Subscribe } from "unstated";
import * as S from "./../styles/styled_components/dashboard";
import EventContent from "./event_content";
import EventList from "./event_list";
import Header from "./header";
import Navigation from "./navigation";

function Dashboard() {
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
            {Maybe.isJust(eventsContext.state.selectedEvent) ? (
              <EventContent
                event={eventsContext.state.selectedEvent}
                eventContext={eventsContext}
              />
            ) : null}
          </S.dashContainer>
        </S.mainContainer>
      )}
    </Subscribe>
  );
}

export default Dashboard;
