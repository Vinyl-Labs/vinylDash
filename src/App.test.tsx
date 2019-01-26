import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import EventState from "./state/containers/event_state";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App eventsContext={new EventState()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
