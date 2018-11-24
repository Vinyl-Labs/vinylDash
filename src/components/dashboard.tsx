import * as React from "react";
import * as S from "./../styles/styled_components/dashboard";
import Header from "./header";
import Navigation from "./navigation";

class Dashboard extends React.Component {
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
          <S.eventContainer />
          <S.detailsContainer />
        </S.dashContainer>
      </S.mainContainer>
    );
  }
}

export default Dashboard;
