import {browser, by, element} from 'protractor';

export class MenuPage {

  navigateTo() {
    return browser.get('/home');
  }

  getTabNewItem() {
    element(by.css('[name="newItem"]')).click();
  }

  getTabSchedule() {
    element(by.css('[id="showScheduleID"]')).click();
  }

  getItemTickets() {
    element(by.css('[id="showTripsID"]')).click();
  }
}
