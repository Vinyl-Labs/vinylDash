import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import EventContext from "./state/containers/event_state";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App eventsContext={new EventContext()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
