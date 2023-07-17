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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PanelMenuModule} from "primeng/panelmenu";
import {MenuModule} from "primeng/menu";
import { SelectionViewComponent } from './selection-view/selection-view.component';
import {TableModule} from "primeng/table";
import { ActivityChartComponent } from './activity-chart/activity-chart.component';
import {ChartModule} from "primeng/chart";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import { Uc1Component } from './uc1/uc1.component';
import { Uc2Component } from './uc2/uc2.component';
import { Uc3Component } from './uc3/uc3.component';
import { Uc4Component } from './uc4/uc4.component';
import { Uc5Component } from './uc5/uc5.component';
import {SpeedDialModule} from "primeng/speeddial";
import { PathOverviewComponent } from './path-overview/path-overview.component';
import { Uc6Component } from './uc6/uc6.component';
import { Uc7Component } from './uc7/uc7.component';
import { Uc0Component } from './uc0/uc0.component';
import {InputNumberModule} from "primeng/inputnumber";
import {RadioButtonModule} from "primeng/radiobutton";
import {RatingModule} from "primeng/rating";
import {InputTextareaModule} from "primeng/inputtextarea";
import {OrganizationChartModule} from "primeng/organizationchart";

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
    ActivityChartComponent,
    Uc1Component,
    Uc2Component,
    Uc3Component,
    Uc4Component,
    Uc5Component,
    PathOverviewComponent,
    Uc6Component,
    Uc7Component,
    Uc0Component
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
        ConfirmDialogModule,
        SpeedDialModule,
        InputNumberModule,
        RadioButtonModule,
        RatingModule,
        InputTextareaModule,
        ReactiveFormsModule,
      OrganizationChartModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
