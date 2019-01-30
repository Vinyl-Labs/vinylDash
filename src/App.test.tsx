import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import AuthState from "./state/containers/auth_state";
import EventState from "./state/containers/event_state";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <App eventState={new EventState()} authState={new AuthState()} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
