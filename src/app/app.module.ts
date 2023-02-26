import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NavComponent } from './nav/nav.component';
import {MegaMenuModule} from "primeng/megamenu";
import {InputTextModule} from "primeng/inputtext";
import {TabViewModule} from "primeng/tabview";
import {CardModule} from "primeng/card";
import {ProgressBarModule} from "primeng/progressbar";
import { PathCardComponent } from './path-card/path-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    PathCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    MegaMenuModule,
    InputTextModule,
    TabViewModule,
    CardModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
