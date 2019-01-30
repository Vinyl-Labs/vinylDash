// tslint:disable:jsx-no-lambda

import * as React from "react";
import { IAuthState } from "src/state/containers/auth_state";
import images from "src/styles/images";
import { Container } from "unstated";
import * as S from "../styles/styled_components/landing";

interface ILandingProps {
  authState: Container<IAuthState>;
}

function Landing(props: ILandingProps): JSX.Element {
  function onSignIn(
    e: React.MouseEvent<HTMLDivElement>,
    authState: Container<IAuthState>
  ) {
    // @ts-ignore
    authState.signInUser("k@k.com", "Likewind1", "email");
    e.preventDefault();
  }

  const landing = (
    <S.landingContainer>
      <S.loginContainer>
        <S.logo src={images.landing.mainLogo} />
        <S.loginButton
          onClick={(e: React.MouseEvent<HTMLDivElement>) =>
            onSignIn(e, props.authState)
          }
        >
          Log In
        </S.loginButton>
      </S.loginContainer>
    </S.landingContainer>
  );

  return landing;
}

export default Landing;
