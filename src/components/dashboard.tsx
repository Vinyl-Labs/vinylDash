import * as React from "react";
import EventContainer, { IEventState } from "src/state/containers/event_state";
import { Container, Subscribe } from "unstated";
import * as S from "./../styles/styled_components/dashboard";
import EventContent from "./event_content";
import EventList from "./event_list";
import Navigation from "./navigation";

class Dashboard extends React.Component {
  public render() {
    return (
      <Subscribe to={[EventContainer]}>
        {(eventsContext: Container<IEventState>) => (
          <S.mainContainer>
            <S.dashContainer>
              <S.headerContainer />
              <S.sidebar>
                <Navigation />
              </S.sidebar>
              <S.eventContainer>
                <EventList eventsContext={eventsContext} />
              </S.eventContainer>
              <EventContent />
            </S.dashContainer>
          </S.mainContainer>
        )}
      </Subscribe>
    );
  }
}

export default Dashboard;
