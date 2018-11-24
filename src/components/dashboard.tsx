import * as React from "react";
import * as S from "./../styles/styled_components/dashboard";
import EventList from "./event_list";
import Header from "./header";
import Navigation from "./navigation";

class Dashboard extends React.Component {
  private eventList = <EventList />;

  public render() {
    return (
      <S.mainContainer>
        <S.dashContainer>
          <S.headerContainer>
            <Header />
          </S.headerContainer>
          <S.sidebar>
            <Navigation />
          </S.sidebar>
          <S.eventContainer>{this.eventList}</S.eventContainer>
          <S.detailsContainer />
        </S.dashContainer>
      </S.mainContainer>
    );
  }
}

export default Dashboard;
