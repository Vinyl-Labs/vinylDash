import * as React from "react";
import * as S from "./styles_dashboard";

class Dashboard extends React.Component {
  public render() {
    return (
      <S.mainContainer>
        <S.dashContainer>
          <S.headerContainer />
          <S.navContainer>
            <S.navbar />
          </S.navContainer>
          <S.eventContainer />
          <S.detailsContainer />
        </S.dashContainer>
      </S.mainContainer>
    );
  }
}

export default Dashboard;
