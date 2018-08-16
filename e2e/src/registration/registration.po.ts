import {browser, by, element} from 'protractor';

export class RegistrationPage {
  navigateTo() {
    return browser.get('/registration');
  }

  fillCredenticals(credentials) {
    element(by.css('[name="firstName"]')).sendKeys(credentials.firstName);
    browser.sleep(1000);
    element(by.css('[name="lastName"]')).sendKeys(credentials.lastName);
    browser.sleep(1000);
    element(by.css('[name="login"]')).sendKeys(credentials.login);
    browser.sleep(1000);
    element(by.css('[name="password"]')).sendKeys(credentials.password);
    browser.sleep(1000);
    element(by.css('[name="registration"]')).click();
    browser.sleep(2000);
  }
}
