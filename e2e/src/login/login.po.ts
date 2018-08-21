import {browser, by, element} from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  logWithTruthParametersAsUser() {
    const credentials = {
      username: 'bob@mail.ru',
      password: 'pass'
    };
    this.fillCredentials(credentials);
  }

  logWithTruthParametersAsAdmin() {
    const credentials = {
      username: 'login@mail.ru',
      password: 'pass'
    };
    this.fillCredentials(credentials);
  }

  logWithWrongParameters() {
    const wrongCredentials = {
      username: 'test@mail.ru',
      password: 'test'
    };
    this.fillCredentials(wrongCredentials);
    element(by.css('button.swal2-confirm.swal2-styled')).click();
  }

  fillCredentials(credentials) {
    element(by.css('[name="username"]')).sendKeys(credentials.username);
    element(by.css('[name="password"]')).sendKeys(credentials.password);
    element(by.css('[name="singIn"]')).click();
  }

  logOut() {
    element(by.xpath('//a[contains(text(),\'Sign out\')]')).click();
  }
}
