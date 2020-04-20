import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { JobSearchComponent } from './job-search.component';
import { StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { IJobSearchState } from '../states/jobSearchState';
import { SELECTLOCATION } from '../actions/jobSearchActions';

describe('JobSearchComponent', () => {
  // tslint:disable-next-line:prefer-const
  let store: MockStore;
  const initialState: IJobSearchState = {};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        JobSearchComponent
      ],
      providers: [
        provideMockStore({ initialState }),
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  }));

  it('should render component', () => {
    const fixture = TestBed.createComponent(JobSearchComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should update state for selected location`, () => {
    const fixture = TestBed.createComponent(JobSearchComponent);
    const app = fixture.componentInstance;
    // tslint:disable-next-line:prefer-const
    let dispatchSpy = spyOn(store, 'dispatch');
    // tslint:disable-next-line:prefer-const
    let location = { id: 1, name: 'dummy', state: '' };
    app.jobs = [];
    app.selectLocation(location);
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
  });
});
