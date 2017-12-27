import { AngExPage } from './app.po';

describe('ang-ex App', () => {
  let page: AngExPage;

  beforeEach(() => {
    page = new AngExPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
