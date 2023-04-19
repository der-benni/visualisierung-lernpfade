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
import { PathViewComponent } from './path-view/path-view.component';
import { PathStepsComponent } from './path-steps/path-steps.component';
import { PathDetailsComponent } from './path-details/path-details.component';
import {KnobModule} from "primeng/knob";
import {FormsModule} from "@angular/forms";
import {PanelMenuModule} from "primeng/panelmenu";
import {MenuModule} from "primeng/menu";
import { SelectionViewComponent } from './selection-view/selection-view.component';
import {TableModule} from "primeng/table";
import { ActivityChartComponent } from './activity-chart/activity-chart.component';
import {ChartModule} from "primeng/chart";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    PathCardComponent,
    PathViewComponent,
    PathStepsComponent,
    PathDetailsComponent,
    SelectionViewComponent,
    ActivityChartComponent
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
        ProgressBarModule,
        KnobModule,
        FormsModule,
        PanelMenuModule,
        MenuModule,
        TableModule,
        ChartModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
