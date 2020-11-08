/* eslint-env node, jest */

import React from "react";
import renderer from "react-test-renderer";
import PowerStrip from "./index";

import theme from "../../themes/bootstrap4";

describe("PowerStrip", () => {
  it("Should render Power Strip content", () => {
    const tree = renderer.create(<PowerStrip theme={theme} />);
    expect(tree).toMatchSnapshot();
  });

  test.todo("Should read global configuration object");
  test.todo("Should allow API endpoint base URL configuration");
});

describe("CSS Theme Switcher", () => {
  test.todo("Should only be displayed in DEV mode");
  test.todo("Should have a default project theme selected by default");
  test.todo(
    "Should display a dropdown with a list of available CSS themes for a given HTML theme"
  );
  test.todo("Should indicate which theme is currently selected in the list");
  test.todo(
    "Should display a preview image for a theme when hovered over in a dropdown"
  );
  test.todo("Should switch to a selected CSS theme when used");
  test.todo("Should repaint UI when new CSS is selected");
  test.todo("Should allow switching between themes using keyboard");
});

describe("Admin UI", () => {
  test.todo(
    "Should display a link to admin UI if currently logged in user is a system admin"
  );
});

describe("Account selector", () => {
  test.todo(
    "Should display account selector if user belongs to more than one account"
  );
  test.todo("Should display current account name as current dropdown value");
  test.todo(
    "Should show current plan name next to account name if plan is defined for account"
  );
  test.todo(
    "Should show current plan's description when hovered over the plan name label"
  );
  test.todo("Should display a dropdown with list of accounts user belongs to");
  test.todo(
    "Should indicate in the dropdown which account user has currently active"
  );
  test.todo(
    "Should indicate that account has no plan currently assigned if so"
  );
  test.todo("Should switch to selected account when dropdown item is chosen");
  test.todo(
    "Should return user to UserConfig::accountSwitchDestination after account switch if configured"
  );
  test.todo(
    "Should return user to the same page after account switch if UserConfig::accountSwitchDestination is not explicitly configured"
  );
});

describe("Extra links", () => {
  test.todo(
    "Should display a list of extra links configured in UserConfig::onLoginStripLinks"
  );
  test.todo(
    "Should calculate extra links using a callback with current user and account info passed in"
  );
});

describe("Authenticated user", () => {
  test.todo("Should display a name of currently authenticated user");
  test.todo("Should link to user's settings page");
  test.todo("Should display a logout link");
});

describe("Impersonation UI", () => {
  test.todo("Should display prominent 'Stop Impersonation' button");
  test.todo("Should clearly indicate impersonator");
  test.todo(
    "Should remove impersonation and remove user cookies and stuff when pressed"
  );
});

describe("Anonymous and unknown user state", () => {
  test.todo(
    "Should display in-progress state (empty or animated progress indicator) until authentication state is known"
  );
  test.todo("Should display signup and login when unauthenticated");
});

describe("PowerStrip appearance", () => {
  test.todo("Should be able to select HTML theme of the PowerStrip");
  test.todo("Should be able to support Bootstrap 3 CSS framework");
  test.todo("Should be able to support Bootstrap 4 CSS framework");
  test.todo("Should be able to support no framework providing it's own styles");
  test.todo("Should not conflict with site's own styles");
  test.todo(
    "Should install on #startupapi-power-strip element if present and with no configuration"
  );
  test.todo("Should install on an element provided if configured");
  test.todo(
    "Should float to the top-right corner of the screen if anchor element is not provided"
  );
  test.todo(
    "Floating element Should provide it's own responsive behavior for small screens"
  );
});
