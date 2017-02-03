import { BlockheadFrontendPage } from './app.po';

describe('blockhead-frontend App', function() {
  let page: BlockheadFrontendPage;

  beforeEach(() => {
    page = new BlockheadFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
