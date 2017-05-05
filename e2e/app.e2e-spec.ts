import { BronzeBraveryPage } from './app.po';

describe('bronze-bravery App', () => {
  let page: BronzeBraveryPage;

  beforeEach(() => {
    page = new BronzeBraveryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
