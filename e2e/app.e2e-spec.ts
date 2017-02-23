import { TopGamesPage } from './app.po';

describe('top-games App', function() {
  let page: TopGamesPage;

  beforeEach(() => {
    page = new TopGamesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
