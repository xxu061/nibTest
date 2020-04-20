import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobDetailsComponent } from './components/job-details.component';
import { JobSearchComponent } from './components/job-search.component';


const routes: Routes = [
  { path: '', component: JobSearchComponent, pathMatch: 'full' },
  { path: 'jobDetails', component: JobDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
