import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getJobsTitle(): Promise<string> {
    return element(by.css('app-root .job-search-theme .job-search-row h5')).getText() as Promise<string>;
  }

  clickJobLink(): Promise<void>{
    return element(by.css('app-root .job-search-theme .job-search-row')).click() as Promise<void>;
  }
}
