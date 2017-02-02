import { Ang2TodoAppPage } from './app.po';

describe('ang2-todo-app App', function() {
  let page: Ang2TodoAppPage;

  beforeEach(() => {
    page = new Ang2TodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
