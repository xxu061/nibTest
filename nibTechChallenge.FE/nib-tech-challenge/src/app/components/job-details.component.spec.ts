import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { JobDetailsComponent } from './job-details.component';

describe('JobDetailsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        JobDetailsComponent
      ],
    }).compileComponents();
  }));

  it('should render component', () => {
    const fixture = TestBed.createComponent(JobDetailsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
