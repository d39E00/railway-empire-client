import {LoginPage} from './login.po';

describe('Login in RAILWAY EMPIRE', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('Login with truth account values', () => {
    page.navigateTo();
    page.logWithTruthParameters();
  });

  it('Login with wrong account values', () => {
    page.navigateTo();
    page.logWithWrongParameters();
  });

});
