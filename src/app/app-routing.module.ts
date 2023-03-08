import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PathViewComponent} from "./path-view/path-view.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'path', component: PathViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
