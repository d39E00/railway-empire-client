import {LoginPage} from '../login/login.po';
import {MenuPage} from '../menu/menu.po';
import {SchedulePage} from './schedule.po';

describe('Create new schedule', () => {
  let page: SchedulePage;
  let login: LoginPage;
  let menu: MenuPage;
  const stationDeparture = 'Voronezh';
  const stationArrival = 'Moscow';
  const dateDeparture = '22.08.2018';


  beforeEach(() => {
    page = new SchedulePage();
    menu = new MenuPage();
    login = new LoginPage();
  });

  it('Find schedule Voronezh - Moscow 22 Aug 10:00:00', () => {
    login.navigateTo();
    login.logWithTruthParametersAsUser();
    menu.getTabSchedule();
    page.findSchedule(stationDeparture, stationArrival, dateDeparture);
  });
});
