import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IJobSearchState, AppState } from '../states/jobSearchState';
import { Job } from '../models/job';
import { GETLOCATIONS, GETJOBS } from '../actions/jobSearchActions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
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
        if(this.locations !== undefined){
          this.selectedLocation = this.locations.filter((l) => l.id === 0)[0];
        }
      });

    this.store
      .select((s) => s.jobSearchState)
      .subscribe((s) => {
        this.jobs = s.jobs;
        this.filteredJobs = this.jobs;
      });

    this.store.dispatch(GETLOCATIONS());
    this.store.dispatch(GETJOBS());
  }

  selectLocation(location: Location) {
    console.log(location);
    this.selectedLocation = location;
    this.filteredJobs =
      location.id === 0
        ? this.jobs
        : this.jobs.filter((j) => j.location.id === location.id);
  }

  selectJob(job: Job) {
    this.selectedJob = job;
  }
}
