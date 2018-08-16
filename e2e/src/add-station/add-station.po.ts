import {browser, by, element} from 'protractor';

export class AddStationPage {

  navigateTo() {
    return browser.get('/add-item');
  }

  addStation() {
    const name = 'Voronezh';
    element(by.css('[id="stationSubmit"]')).click();
    browser.sleep(1000);
    element(by.css('[name="stationName"]')).sendKeys(name);
    browser.sleep(1000);
    element(by.css('[name="addStation"]')).click();
    browser.sleep(2000);
  }
}
