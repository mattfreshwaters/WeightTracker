import { NgModule } from '@angular/core';
import { EntriesComponent } from './entries/entries.component';
import { RouterModule, Routes } from '@angular/router';
import { GoalsComponent } from './goals/goals.component';
import { UsersComponent } from './users/users.component';
import { EntriesDashboardComponent } from './entries-dashboard/entries-dashboard.component';
import { GoalsDashboardComponent } from './goals-dashboard/goals-dashboard.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { GraphComponent } from './graph/graph.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes =[
  {path: 'users', component: UsersComponent},
  {path: 'entries', component: EntriesComponent},
  {path: 'goals', component: GoalsComponent},
  {path: 'entriesDashboard', component: EntriesDashboardComponent},
  {path: 'entryDetail/:id', component: EntryDetailsComponent},
  {path: 'goalsDashBoard', component: GoalsDashboardComponent},
  {path: 'goalDetail/:id', component: GoalDetailsComponent},
  {path: 'graphEntries', component: GraphComponent},
  {path: 'login', component: SigninComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

