import * as React from "react";
import * as ReactDOM from "react-dom";
import { Container, Provider, Subscribe } from "unstated";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import EventContext, { IEventContext } from "./state/containers/event_state";

ReactDOM.render(
  <Provider>
    <Subscribe to={[EventContext]}>
      {(eventsContext: Container<IEventContext>) => (
        <App eventsContext={eventsContext} />
      )}
    </Subscribe>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
