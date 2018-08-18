import {LoginPage} from '../login/login.po';
import {MenuPage} from '../menu/menu.po';
import {AddSchedulePage} from './add-schedule.po';
import {protractor} from 'protractor';

describe('Create new schedule', () => {
  let page: AddSchedulePage;
  let login: LoginPage;
  let menu: MenuPage;
  const stationDeparture = 'Voronezh';
  const stationArrival = 'Moscow';
  const date = '22.08.2018' + protractor.Key.TAB + '10:00:00';
  const trainName = 'T120';


  beforeEach(() => {
    page = new AddSchedulePage();
    menu = new MenuPage();
    login = new LoginPage();
  });

  it('Add new schedule Voronezh - Moscow 22 Aug 10:00:00', () => {
    login.navigateTo();
    login.logWithTruthParameters();
    menu.getTabNewItem();
    page.addSchedule(stationDeparture, stationArrival, trainName, date);
  });
});
