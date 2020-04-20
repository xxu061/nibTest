import { createReducer, on, State, Action } from '@ngrx/store';
import { IJobSearchState, AppState } from '../states/jobSearchState';
import { GETLOCATIONS_SUCCESS, GETJOBS_SUCCESS, SELECTLOCATION } from '../actions/jobSearchActions';

export const initialState: IJobSearchState = {};

const jobSearchReducer = createReducer(initialState,
    on(GETLOCATIONS_SUCCESS, (state, { payload }) => ({
        ...state,
        locations: payload })
      ),
    on(GETJOBS_SUCCESS, (state, { payload }) => ({
        ...state,
        jobs: payload
      })),
    on(SELECTLOCATION, (state, { payload }) => ({
      ...state,
      selectedLocation: payload
    }))
);

export function reducer(state: IJobSearchState | undefined, action: Action) {
  return jobSearchReducer(state, action);
}
