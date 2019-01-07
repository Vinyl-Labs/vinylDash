import * as React from "react";
import * as S from "../styles/styled_components/navigation";
import Images from "./../styles/images";

interface INavigationProps {
  events?: Event;
}

function Navigation(props: INavigationProps): JSX.Element {
  const navBar = (
    <S.navContainer>
      <S.logo>
        <S.logoIcon src={Images.header.logo} />
      </S.logo>
      <S.navItem>
        <S.navIcon src={Images.navigation.home} />
      </S.navItem>
      <S.navItem>
        <S.navIcon src={Images.navigation.events} />
      </S.navItem>
      <S.navItem>
        <S.navIcon src={Images.navigation.settings} />
      </S.navItem>
    </S.navContainer>
  );

  return navBar;
}

export default Navigation;
