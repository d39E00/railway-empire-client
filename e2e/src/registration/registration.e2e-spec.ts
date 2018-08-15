import {RegistrationPage} from './registration.po';

describe('Registration in RAILWAY EMPIRE', () => {
  let page: RegistrationPage;

  beforeEach(() => {
    page = new RegistrationPage();
  });

  const credentials = {
    firstName: 'Antony',
    lastName: 'Soprano',
    login: 'test@mail.ru',
    password: 'password'
  };

  const wrongCredentials = {
    firstName: 'Antony',
    lastName: 'Soprano',
    login: 'login@mail.ru',
    password: 'password'
  };

  it('Registration as a new user', () => {
    page.navigateTo();
    page.fillCredenticals(credentials);
  });

  it('Registration as a authorized user', () => {
    page.navigateTo();
    page.fillCredenticals(wrongCredentials);
  });

});
