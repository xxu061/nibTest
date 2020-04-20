import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../models/location';
import { Job } from '../models/job';
import { Injectable } from '@angular/core';

@Injectable()
export class JobSearchService
{
    locationUrl = 'https://localhost:44338/Location/';
    jobUrl = 'https://localhost:44338/Job/';

    constructor(private http: HttpClient){

    }

    public GetLocations(): Observable<Location[]>{
        console.log('Getting locations...');
        return this.http.get<Location[]>(this.locationUrl);
    }

    public GetJobs(location: Location): Observable<Job[]>{
        return this.http.get<Job[]>(this.jobUrl);
    }
}
