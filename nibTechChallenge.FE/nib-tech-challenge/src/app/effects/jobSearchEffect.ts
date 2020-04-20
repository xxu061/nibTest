import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { JobSearchService } from '../services/jobSearchService';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { GETLOCATIONS_SUCCESS } from '../actions/jobSearchActions';

@Injectable()
export class JobSearchEffect {
  getLocations$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[JOBSEARCH] getlocations'),
      mergeMap(() =>
        this.jobSearchService.GetLocations().pipe(
          map((locations) => GETLOCATIONS_SUCCESS(locations)),
          catchError((error) => of({ type: '[JOBSEARCH] getlocations fail' }))
        )
      )
    ), { dispatch: true}
  );
  getJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[JOBSEARCH] getjobs'),
      mergeMap((location) =>
        this.jobSearchService.GetJobs(location).pipe(
          map((locations) => ({
            type: '[JOBSEARCH] getjobs success',
            payload: locations,
          })),
          catchError((error) => of({ type: '[JOBSEARCH] getjobs fail' }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private jobSearchService: JobSearchService
  ) {}
}
