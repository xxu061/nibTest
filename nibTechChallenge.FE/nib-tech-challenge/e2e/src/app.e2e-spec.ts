import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should verify first job loaded', () => {
    page.navigateTo();
    expect(page.getJobsTitle()).toEqual('Alliances Operations Coordinator');
  });

  it('should navigate to job details', () => {
    page.navigateTo();
    // tslint:disable-next-line:prefer-const
    let currentUrl = browser.getCurrentUrl();
    page.clickJobLink();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).not.toEqual(currentUrl);
  });
});
