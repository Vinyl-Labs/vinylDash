import * as React from "react";
import { IUser } from "src/helpers/users";
import { MainContainer } from "../styles/styled_components/main";
import { Header } from "./header";
import { Home } from "./home";
import { SideBar } from "./side_bar";

interface IMainProps {
  user: IUser;
}

function Main(props: IMainProps) {
  return (
    <MainContainer>
      <Header />
      <SideBar />
      <Home />
    </MainContainer>
  );
}

export default Main;
