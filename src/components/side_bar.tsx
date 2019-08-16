import * as React from "react";
import { ChatWidget } from "src/components/chat_widget";
import { SideBarContainer } from "src/styles/styled_components/side_bar";

function SideBar() {
  return (
    <SideBarContainer>
      <ChatWidget />
    </SideBarContainer>
  );
}

export { SideBar };
