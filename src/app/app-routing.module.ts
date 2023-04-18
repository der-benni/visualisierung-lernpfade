import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PathViewComponent} from "./path-view/path-view.component";
import {SelectionViewComponent} from "./selection-view/selection-view.component";

const routes: Routes = [
  {path: '', component: SelectionViewComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'learning-path', component: PathViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
