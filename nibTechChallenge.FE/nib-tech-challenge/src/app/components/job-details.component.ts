import { Input, Component } from '@angular/core';
import { Job } from '../models/job';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './job-details.component.html',
    styleUrls: ['./job-details.component.sass'],
})
export class JobDetailsComponent{
    job: Job;

    constructor(private router: ActivatedRoute){
        this.job = JSON.parse(this.router.snapshot.paramMap.get('job'));
        console.log(this.job);
    }
}
