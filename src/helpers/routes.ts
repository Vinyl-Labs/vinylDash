import { Artists } from "src/components/artists";
import { ChatWidget } from "src/components/chat_widget";

// Each logical "route" has two components, one for
// the sidebar and one for the home area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    exact: true,
    main: Artists,
    path: "/",
    sidebar: ChatWidget
  }
];

export default routes;
