import {browser, by, element} from 'protractor';

export class AddSchedulePage {

  navigateTo() {
    return browser.get('/add-item');
  }

  addSchedule(stationDeparture, stationArrival, train, dateTime) {
    element(by.css('[id="scheduleSubmit"]')).click();
    element(by.css('[name="stationDeparture"]')).sendKeys(stationDeparture);
    element(by.css('[name="stationArrival"]')).sendKeys(stationArrival);
    element(by.css('[name="trainSchedule"]')).sendKeys(train);
    element(by.css('[name="dateDeparture"')).sendKeys(dateTime);
    element(by.css('[name="addSchedule"]')).click();
    element(by.css('button.swal2-confirm.swal2-styled')).click();

  }
}
