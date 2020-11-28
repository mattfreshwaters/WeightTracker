import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { EntriesComponent } from './entries/entries.component';
import { GoalsComponent } from './goals/goals.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { EntriesDashboardComponent } from './entries-dashboard/entries-dashboard.component';
import { GoalsDashboardComponent } from './goals-dashboard/goals-dashboard.component';
import { GraphComponent } from './graph/graph.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { AuthInterceptor } from './authInterceptor';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    UsersComponent,
    EntriesComponent,
    GoalsComponent,
    EntryDetailsComponent,
    GoalDetailsComponent,
    MessagesComponent,
    EntriesDashboardComponent,
    GoalsDashboardComponent,
    SigninComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
