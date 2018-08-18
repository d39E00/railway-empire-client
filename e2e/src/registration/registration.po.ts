import {browser, by, element} from 'protractor';

export class RegistrationPage {
  navigateTo() {
    return browser.get('/registration');
  }

  fillCredenticals(credentials) {
    element(by.css('[name="firstName"]')).sendKeys(credentials.firstName);
    element(by.css('[name="lastName"]')).sendKeys(credentials.lastName);
    element(by.css('[name="login"]')).sendKeys(credentials.login);
    element(by.css('[name="password"]')).sendKeys(credentials.password);
    element(by.css('[name="registration"]')).click();
  }
}
