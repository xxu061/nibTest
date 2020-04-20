import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IJobSearchState, AppState } from '../states/jobSearchState';
import { Job } from '../models/job';
import {
  GETLOCATIONS,
  GETJOBS,
  SELECTLOCATION,
} from '../actions/jobSearchActions';
import { Router } from '@angular/router';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss'],
})
export class JobSearchComponent implements OnInit {
  locations: Location[];
  jobs: Job[];
  filteredJobs: Job[];
  selectedLocation: Location;
  selectedJob: Job;
  constructor(private store: Store<AppState>, private route: Router) {}

  ngOnInit(): void {
    this.store
      .select((s) => s.jobSearchState)
      .subscribe((s) => {
        this.locations = s.locations;
        if (!s.selectedLocation && this.locations !== undefined) {
          this.selectedLocation = this.locations.filter((l) => l.id === 0)[0];
        }

        this.jobs = s.jobs;
        this.filteredJobs = this.jobs;

        if (s.selectedLocation) {
          this.selectLocation(s.selectedLocation, false);
        }
      });

    this.store.dispatch(GETLOCATIONS());
    this.store.dispatch(GETJOBS());
  }

  selectLocation(location: Location, updateState: boolean = true) {
    console.log(location);
    this.selectedLocation = location;
    this.filteredJobs =
      location.id === 0
        ? this.jobs
        : this.jobs.filter((j) => j.location.id === location.id);

    if (updateState) {
      this.store.dispatch(SELECTLOCATION(this.selectedLocation));
    }
  }

  GoToJobDetails(job: Job) {
    console.log('navigating');
    this.route.navigate(['jobDetails', { job: JSON.stringify(job) }]);
  }
}
