/* eslint-env node, jest */

import { h } from 'preact';
import render from 'preact-render-to-string';
import PowerStrip from './index';

import theme from '../../themes/bootstrap4';

describe('PowerStrip', () => {
  it('Should render Power Strip content', () => {
    const tree = render(<PowerStrip theme={theme} />);
    expect(tree).toMatchSnapshot();
  });

  it('Should read global configuration object');
  it('Should allow API endpoint base URL configuration');
});

describe('CSS Theme Switcher', () => {
  it('Should only be displayed in DEV mode');
  it('Should have a default project theme selected by default');
  it('Should display a dropdown with a list of available CSS themes for a given HTML theme');
  it('Should indicate which theme is currently selected in the list');
  it('Should display a preview image for a theme when hovered over in a dropdown');
  it('Should switch to a selected CSS theme when used');
  it('Should repaint UI when new CSS is selected');
  it('Should allow switching between themes using keyboard');
});

describe('Admin UI', () => {
  it('Should display a link to admin UI if currently logged in user is a system admin');
});

describe('Account selector', () => {
  it('Should display account selector if user belongs to more than one account');
  it('Should display current account name as current dropdown value');
  it('Should show current plan name next to account name if plan is defined for account');
  it("Should show current plan's description when hovered over the plan name label");
  it('Should display a dropdown with list of accounts user belongs to');
  it('Should indicate in the dropdown which account user has currently active');
  it('Should indicate that account has no plan currently assigned if so');
  it('Should switch to selected account when dropdown item is chosen');
  it('Should return user to UserConfig::accountSwitchDestination after account switch if configured');
  it('Should return user to the same page after account switch if UserConfig::accountSwitchDestination is not explicitly configured');
});

describe('Extra links', () => {
  it('Should display a list of extra links configured in UserConfig::onLoginStripLinks');
  it('Should calculate extra links using a callback with current user and account info passed in');
});

describe('Authenticated user', () => {
  it('Should display a name of currently authenticated user');
  it("Should link to user's settings page");
  it('Should display a logout link');
});

describe('Impersonation UI', () => {
  it("Should display prominent 'Stop Impersonation' button");
  it('Should clearly indicate impersonator');
  it('Should remove impersonation and remove user cookies and stuff when pressed');
});

describe('Anonymous and unknown user state', () => {
  it('Should display in-progress state (empty or animated progress indicator) until authentication state is known');
  it('Should display signup and login when unauthenticated');
});

describe('PowerStrip appearance', () => {
  it('Should be able to select HTML theme of the PowerStrip');
  it('Should be able to support Bootstrap 3 CSS framework');
  it('Should be able to support Bootstrap 4 CSS framework');
  it("Should be able to support no framework providing it's own styles");
  it("Should not conflict with site's own styles");
  it('Should install on #startupapi-power-strip element if present and with no configuration');
  it('Should install on an element provided if configured');
  it('Should float to the top-right corner of the screen if anchor element is not provided');
  it("Floating element Should provide it's own responsive behavior for small screens");
});
