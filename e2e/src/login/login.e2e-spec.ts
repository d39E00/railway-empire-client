import {LoginPage} from './login.po';

describe('Login in RAILWAY EMPIRE', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  const credentials = {
    username: 'login@mail.ru',
    password: 'pass'
  };

  const wrongCredentials = {
    username: 'test@mail.ru',
    password: 'test'
  };

  it('Login with truth account values', () => {
    page.navigateTo();
    page.fillCredenticals(credentials);
  });

  it('Login with wrong account values', () => {
    page.navigateTo();
    page.fillCredenticals(wrongCredentials);
  });

});
