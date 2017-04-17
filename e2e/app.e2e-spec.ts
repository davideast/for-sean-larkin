import { Af4Page } from './app.po';

describe('af4 App', () => {
  let page: Af4Page;

  beforeEach(() => {
    page = new Af4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
