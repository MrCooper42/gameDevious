import { MEAN2SeedPage } from './app.po';

describe('MEAN2-seed App', function() {
  let page: MEAN2SeedPage;

  beforeEach(() => {
    page = new MEAN2SeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
