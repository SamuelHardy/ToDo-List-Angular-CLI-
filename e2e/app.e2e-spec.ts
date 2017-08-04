import { AngularToDOListPage } from './app.po';

describe('angular-to-dolist App', function() {
  let page: AngularToDOListPage;

  beforeEach(() => {
    page = new AngularToDOListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
