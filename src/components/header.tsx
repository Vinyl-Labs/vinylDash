import * as React from "react";
import images from "src/styles/images";
import * as S from "../styles/styled_components/header";

function Header(): JSX.Element {
  const header = (
    <S.headerContent>
      <S.logo src={images.header.logo} />
      <S.createEventButton>Create Event</S.createEventButton>
      <S.profileContainer>
        <S.profile src={images.header.profile} />
        <S.profileText>Vinyl Labs</S.profileText>
      </S.profileContainer>
    </S.headerContent>
  );

  return header;
}

export default Header;
