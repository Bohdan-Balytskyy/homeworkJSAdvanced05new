import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenzorComponent } from './cenzor/cenzor.component';
import { HomeComponent } from './home/home.component';
import { TasklistoutComponent } from './tasklistout/tasklistout.component';
import { UserlistComponent } from './userlist/userlist.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'works', component: WorksComponent, children: [
      { path: 'cenzor', component: CenzorComponent },
      { path: 'userlist', component: UserlistComponent },
      { path: 'tasklist', component: TasklistoutComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
