import { FlexboxPage } from './app.po';

describe('flexbox App', () => {
  let page: FlexboxPage;

  beforeEach(() => {
    page = new FlexboxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
