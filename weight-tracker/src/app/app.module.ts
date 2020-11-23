import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { EntriesComponent } from './entries/entries.component';
import { GoalsComponent } from './goals/goals.component';

import { FormsModule } from '@angular/forms';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { EntriesDashboardComponent } from './entries-dashboard/entries-dashboard.component';
import { GoalsDashboardComponent } from './goals-dashboard/goals-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EntriesComponent,
    GoalsComponent,
    EntryDetailsComponent,
    GoalDetailsComponent,
    MessagesComponent,
    EntriesDashboardComponent,
    GoalsDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
