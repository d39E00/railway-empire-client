import {AddStationPage} from './add-station.po';
import {LoginPage} from '../login/login.po';
import {MenuPage} from '../menu/menu.po';

describe('Create new station', () => {
  let page: AddStationPage;
  let login: LoginPage;
  let menu: MenuPage;
  const name = 'Voronezh';

  beforeEach(() => {
    page = new AddStationPage();
    menu = new MenuPage();
    login = new LoginPage();
  });

  it('Add new station - Voronezh', () => {
    login.navigateTo();
    login.logWithTruthParametersAsAdmin();
    menu.getTabNewItem();
    page.addStation(name);
  });
});
