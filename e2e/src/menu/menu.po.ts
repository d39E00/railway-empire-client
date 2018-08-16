import {browser, by, element} from 'protractor';

export class MenuPage {

  navigateTo() {
    return browser.get('/home');
  }

  getTabStation() {
    element(by.css('[name="newItem"]')).click();
    browser.sleep(500);
  }
}
