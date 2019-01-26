import { Maybe } from "ramda-fantasy";
import * as React from "react";
import EventContext, {
  IEventContext
} from "src/state/containers/event_state";
import { Container, Subscribe } from "unstated";
import * as S from "./../styles/styled_components/dashboard";
import EventContent from "./event_content";
import EventList from "./event_list";
import Navigation from "./navigation";

class Dashboard extends React.Component {
  public render() {
    return (
      <Subscribe to={[EventContext]}>
        {(eventsContext: Container<IEventContext>) => (
          <S.mainContainer>
            <S.dashContainer>
              <S.headerContainer />
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
}

export default Dashboard;
