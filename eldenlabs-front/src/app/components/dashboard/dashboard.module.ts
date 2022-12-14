import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared/shared.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { TelemetryComponent } from "./telemetry/telemetry.component";

@NgModule({
    declarations: [
      DashboardComponent,
      NavbarComponent,
      TelemetryComponent
    ],
    imports: [
      CommonModule,
      DashboardRoutingModule,
      SharedModule,
      HttpClientModule
    ],
    exports: [
      DashboardComponent,
      NavbarComponent,
      TelemetryComponent
    ],
    providers:[
      HttpClientModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
  export class DashboardModule { }
  