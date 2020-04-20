import { createAction, props } from '@ngrx/store';
import { Location } from '../models/location';
import { Job } from '../models/job';

export const GETLOCATIONS = createAction('[JOBSEARCH] getlocations');
export const GETLOCATIONS_SUCCESS = createAction('[JOBSEARCH] getlocations success', (payload: Location[]) => ({payload}));
export const GETLOCATIONS_FAIL = createAction('[JOBSEARCH] getlocations fail');
export const GETJOBS = createAction('[JOBSEARCH] getjobs');
export const GETJOBS_SUCCESS = createAction('[JOBSEARCH] getjobs success', (payload: Job[]) => ({payload}));
export const GETJOBS_FAIL = createAction('[JOBSEARCH] getjobs fail');


