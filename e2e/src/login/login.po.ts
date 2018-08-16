import {browser, by, element} from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  logWithTruthParameters() {
    const credentials = {
      username: 'login@mail.ru',
      password: 'pass'
    };
    this.fillCredenticals(credentials);
  }

  logWithWrongParameters() {
    const wrongCredentials = {
      username: 'test@mail.ru',
      password: 'test'
    };
    this.fillCredenticals(wrongCredentials);
  }

  fillCredenticals(credentials) {
    element(by.css('[name="username"]')).sendKeys(credentials.username);
    browser.sleep(2000);
    element(by.css('[name="password"]')).sendKeys(credentials.password);
    browser.sleep(2000);
    element(by.css('[name="singIn"]')).click();
    browser.sleep(5000);
  }
}
