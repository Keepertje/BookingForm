import { DEMOPage } from './app.po';

describe('demo App', function() {
  let page: DEMOPage;

  beforeEach(() => {
    page = new DEMOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
