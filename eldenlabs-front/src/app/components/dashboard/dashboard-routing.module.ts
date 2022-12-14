import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KickOffComponent } from "../kick-off/kick-off.component";
import { DashboardComponent } from "./dashboard.component";
import { TelemetryComponent } from "./telemetry/telemetry.component";

const routes: Routes = [
    {
      path: '',
      component: DashboardComponent, children: [
        {
          path: '',
          component: KickOffComponent
        },
        {
          path: 'Telemetry',
          component: TelemetryComponent
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }