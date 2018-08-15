import {browser, by, element} from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  fillCredenticals(credentials) {
    element(by.css('[name="username"]')).sendKeys(credentials.username);
    element(by.css('[name="password"]')).sendKeys(credentials.password);
    element(by.css('[name="singIn"]')).click();
  }
}
