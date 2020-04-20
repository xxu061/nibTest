import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IJobSearchState } from '../states/jobSearchState';
import { Location } from '../models/location';
import { Job } from '../models/job';
import { GETLOCATIONS } from '../actions/jobSearchActions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent{
  logos = ['../assets/images/nib1.PNG', '../assets/images/nib2.PNG', '../assets/images/nib3.PNG', '../assets/images/nib4.PNG'];
}
