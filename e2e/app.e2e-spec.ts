import { MoreSoupSiteNewPage } from './app.po';

describe('more-soup-site-new App', function() {
  let page: MoreSoupSiteNewPage;

  beforeEach(() => {
    page = new MoreSoupSiteNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
