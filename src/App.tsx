import createBrowserHistory from "history/createBrowserHistory";
import * as React from "react";
import { useEffect } from "react";
import { Router } from "react-router";
import { Container } from "unstated";
import Landing from "./components/landing";
import Main from "./components/main";
import { IUser } from "./helpers/users";
import { IAuthState } from "./state/containers/auth_state";
import { IEventState } from "./state/containers/event_state";

const history = createBrowserHistory();

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
    .map((user: IUser) => <Main key={user.uid} user={user} />)
    .getOrElse(<Landing authState={props.authState} />);

  return <Router history={history}>{RenderDashboard}</Router>;
}

export default App;
