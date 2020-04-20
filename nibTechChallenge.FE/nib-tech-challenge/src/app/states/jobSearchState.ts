import {Location} from '../models/location';
import { Job } from '../models/job';
import { ActionReducerMap } from '@ngrx/store';
import { reducer } from '../reducers/jobSearchReducer';

export interface AppState {
    jobSearchState: IJobSearchState;
}

export interface IJobSearchState{
    locations?: Array<Location>;
    jobs?: Array<Job>;
}

export const reducers: ActionReducerMap<AppState> = {
    jobSearchState: reducer
};

export const initialJobSearchState: IJobSearchState = {
};

