import {LoginPage} from '../login/login.po';
import {MenuPage} from '../menu/menu.po';
import {AddStationPage} from '../add-station/add-station.po';
import {AddSchedulePage} from '../add-schedule/add-schedule.po';
import {SchedulePage} from '../schedule/schedule.po';
import {browser, protractor} from 'protractor';

describe('Main business case', () => {
  let newStation: AddStationPage;
  let newSchedule: AddSchedulePage;
  let schedule: SchedulePage;
  let login: LoginPage;
  let menu: MenuPage;
  const stationDeparture = 'Minsk';
  const stationArrival = 'Moscow';
  const date = '27.08.2018' + protractor.Key.TAB + '10:00:00';
  const trainName = 'T127';
  const dateDeparture = '27.08.2018';

  beforeEach(() => {
    newStation = new AddStationPage();
    newSchedule = new AddSchedulePage();
    schedule = new SchedulePage();
    menu = new MenuPage();
    login = new LoginPage();
    const origFn = browser.driver.controlFlow().execute;

    browser.driver.controlFlow().execute = function() {
      const args = arguments;

      // queue 100ms wait
      origFn.call(browser.driver.controlFlow(), function() {
        return protractor.promise.delayed(50);
      });

      return origFn.apply(browser.driver.controlFlow(), args);
    };
  });

  it('Login as ADMIN create Voronezh station', () => {
    login.navigateTo();
    login.logWithTruthParametersAsAdmin();
    menu.getTabNewItem();
    newStation.addStation(stationDeparture);
  });

  it('Login as ADMIN create schedule with new station', () => {
    newSchedule.addSchedule(stationDeparture, stationArrival, trainName, date);
    login.logOut();
  });

  it('Login as USER find and book ticket', () => {
    login.logWithTruthParametersAsUser();
    menu.getTabSchedule();
    schedule.findSchedule(stationDeparture, stationArrival, dateDeparture);
    menu.navigateTo();
    menu.getItemTickets();
    login.logOut();
  });
});
