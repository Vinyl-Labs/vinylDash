import * as React from "react";
import * as ReactDOM from "react-dom";
import { Container, Provider, Subscribe } from "unstated";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import AuthState, { IAuthState } from "./state/containers/auth_state";
import EventState, { IEventState } from "./state/containers/event_state";

ReactDOM.render(
  <Provider>
    <Subscribe to={[EventState, AuthState]}>
      {(
        eventState: Container<IEventState>,
        authState: Container<IAuthState>
      ) => <App eventState={eventState} authState={authState} />}
    </Subscribe>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
