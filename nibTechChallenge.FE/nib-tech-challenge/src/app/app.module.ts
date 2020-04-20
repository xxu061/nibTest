import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { IJobSearchState, reducers } from './states/jobSearchState';
import { JobSearchComponent } from './components/job-search.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { JobSearchEffect } from './effects/jobSearchEffect';
import { StoreModule } from '@ngrx/store';
import { JobSearchService } from './services/jobSearchService';
import { DescriptionFilterPipe } from './Pipes/descriptionPipe';
import { JobDetailsComponent } from './components/job-details.component';

@NgModule({
  declarations: [
    AppComponent,
    JobSearchComponent,
    DescriptionFilterPipe,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([JobSearchEffect])
  ],
  exports: [DescriptionFilterPipe],
  providers: [JobSearchService, DescriptionFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
  }
}
