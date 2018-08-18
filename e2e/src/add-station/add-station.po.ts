import {browser, by, element} from 'protractor';

export class AddStationPage {

  navigateTo() {
    return browser.get('/add-item');
  }

  addStation(name) {
    element(by.css('[id="stationSubmit"]')).click();
    element(by.css('[name="stationName"]')).sendKeys(name);
    element(by.css('[name="addStation"]')).click();
    element(by.css('button.swal2-confirm.swal2-styled')).click();
    element(by.css('button.swal2-confirm.swal2-styled')).click();
  }
}
