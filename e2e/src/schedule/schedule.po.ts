import {browser, by, element} from 'protractor';

export class SchedulePage {

  navigateTo() {
    return browser.get('/add-item');
  }

  findSchedule(stationDeparture, stationArrival, dateDeparture) {
    element(by.css('a.carousel-control-next')).click();
    element(by.css('[id="stationDepartureByDates"]')).sendKeys(stationDeparture);
    element(by.css('[id="stationArrivalByDates"]')).sendKeys(stationArrival);
    element(by.css('[id="dateDepartureByDates"]')).sendKeys(dateDeparture);
    element(by.css('[name="findSchedule"]')).click();
    element(by.xpath('//button[@type=\'button\']')).click();
    element(by.xpath('//ul[@id=\'place\']/li[15]')).click();
    element(by.xpath('//div[4]/button')).click();
    element(by.css('button.swal2-confirm.swal2-styled')).click();
  }
}
