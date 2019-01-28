import * as React from "react";
import { useEffect } from "react";
import { Container } from "unstated";
import "./App.css";
import Dashboard from "./components/dashboard";
import { IEventState } from "./state/containers/event_state";

interface IAppProps {
  eventsContext: Container<IEventState>;
}

function App(props: IAppProps) {
  useEffect(() => {
    // @ts-ignore
    // The app fetches firestore data at launch
    props.eventsContext.setEventListener();
  }, []);

  return <Dashboard />;
}

export default App;
