import {MenuPage} from './menu.po';

describe('workspace-project App', () => {
  let page: MenuPage;

  beforeEach(() => {
    page = new MenuPage();
  });

  it('Chose add-station tab', () => {
    page.navigateTo();
    page.getTabNewItem();
  });
});
