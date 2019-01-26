import * as React from "react";
import { Container } from "unstated";
import "./App.css";
import Dashboard from "./components/dashboard";
import { IEventState } from "./state/containers/event_state";

interface IAppProps {
  eventsContext: Container<IEventState>;
}

class App extends React.Component<IAppProps> {
  public componentDidMount() {
    // @ts-ignore
    // The app fetches firestore data at launch
    this.props.eventsContext.setEventListener();
  }

  public render() {
    return <Dashboard />;
  }
}

export default App;
