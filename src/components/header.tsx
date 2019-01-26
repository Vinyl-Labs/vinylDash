// tslint:disable:jsx-no-lambda

import * as React from "react";
import AuthState, { IAuthState } from "src/state/containers/auth_state";
import images from "src/styles/images";
import { Container, Subscribe } from "unstated";
import * as S from "../styles/styled_components/header";

function Header(): JSX.Element {
  function onSignIn(
    e: React.MouseEvent<HTMLDivElement>,
    authState: Container<IAuthState>
  ) {
    // @ts-ignore
    authState.signInUser("k@k.com", "Likewind1", "email");
    e.preventDefault();
  }

  function onSignOut(
    e: React.MouseEvent<HTMLDivElement>,
    authState: Container<IAuthState>
  ) {
    // @ts-ignore
    authState.signOut();
    e.preventDefault();
  }

  const header = (
    <Subscribe to={[AuthState]}>
      {(authState: Container<IAuthState>) => (
        <S.headerContent>
          <S.profileContainer>
            <S.profile src={images.header.profile} />
            {authState.state.signedIn ? (
              <S.profileText onClick={e => onSignOut(e, authState)}>
                Sign Out
              </S.profileText>
            ) : (
              <S.profileText onClick={e => onSignIn(e, authState)}>
                Log In
              </S.profileText>
            )}
          </S.profileContainer>
        </S.headerContent>
      )}
    </Subscribe>
  );

  return header;
}

export default Header;
