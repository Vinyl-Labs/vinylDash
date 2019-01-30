import * as React from "react";
import { useEffect } from "react";
import { Container } from "unstated";
import "./App.css";
import Dashboard from "./components/dashboard";
import Landing from "./components/landing";
import { IUser } from "./helpers/users";
import { IAuthState } from "./state/containers/auth_state";
import { IEventState } from "./state/containers/event_state";

interface IAppProps {
  eventState: Container<IEventState>;
  authState: Container<IAuthState>;
}

function App(props: IAppProps) {
  useEffect(() => {
    // @ts-ignore
    // The app fetches firestore data at launch
    props.eventState.setEventListener();
  }, []);

  const RenderDashboard = props.authState.state.user
    .map((user: IUser) => <Dashboard key={user.uid} user={user} />)
    .getOrElse(<Landing authState={props.authState} />);

  return RenderDashboard;
}

export default App;
