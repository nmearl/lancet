import * as React from "react";
import {
  Alignment,
  AnchorButton,
  Navbar,
  NavbarGroup,
  NavbarDivider,
  Button
} from "@blueprintjs/core";
// import { Select } from "@blueprintjs/select";

// const SubsetSelect = Select.ofType<>();

export interface ToolbarProps {}

export class Toolbar extends React.PureComponent<ToolbarProps> {
  public render() {
    return (
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <AnchorButton
            icon="box"
            rightIcon="caret-down"
            className="edge-toolbar-button-left"
          >
            Session
          </AnchorButton>
          <AnchorButton icon="database" rightIcon="caret-down">
            Data
          </AnchorButton>
          <NavbarDivider />
          <AnchorButton text="Link Data" icon="link" />
          <AnchorButton text="Arithmetic" icon="calculator" />
          <NavbarDivider />
          <Button icon="home" text="Home" />
          <Button icon="document" text="Files" />
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <AnchorButton minimal icon="console" />
          <NavbarDivider />
          <AnchorButton minimal icon="settings" />
          <NavbarDivider />
          <AnchorButton minimal icon="error" />
        </NavbarGroup>
      </Navbar>
    );
  }
}
