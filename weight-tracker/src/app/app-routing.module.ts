import { NgModule } from '@angular/core';
import { EntriesComponent } from './entries/entries.component';
import { RouterModule, Routes } from '@angular/router';
import { GoalsComponent } from './goals/goals.component';
import { UsersComponent } from './users/users.component';
import { EntriesDashboardComponent } from './entries-dashboard/entries-dashboard.component';

const routes: Routes =[
  {path: 'users', component: UsersComponent},
  {path: 'entries', component: EntriesComponent},
  {path: 'goals', component: GoalsComponent},
  {path: 'entriesDashboard', component: EntriesDashboardComponent},
  {path: '', redirectTo: '  /entriesDashBoard', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

