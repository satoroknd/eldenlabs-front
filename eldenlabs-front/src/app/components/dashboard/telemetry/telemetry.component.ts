import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { TelemetryDetails } from 'src/app/interfaces/telemetry-details';
import { TelemetryService } from 'src/app/services/telemetry.service';

@Component({
  selector: 'app-telemetry',
  templateUrl: './telemetry.component.html',
  styleUrls: ['./telemetry.component.css']
})
export class TelemetryComponent  implements OnInit {

  dataSrc! : MatTableDataSource<any>;
  telemetryDetails : TelemetryDetails[] = [];

  displayedColumns: string[] = ['connection_device_id', 'event_processed', 
  'hefesto_id', 'timestamp', 'var_name', 'value_description', 'plugin' ,'request', 
  'var_name_l', 'device'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor( private _telemetryService: TelemetryService, private _snackBar: MatSnackBar)
  {

  }

  getTelemetreyData(){
    this._telemetryService.getTelemetreyData().subscribe( resp => {
      this.telemetryDetails = resp;
      });
    this.dataSrc = new MatTableDataSource(this.telemetryDetails);
  }

  ngOnInit() {
    this.getTelemetreyData();
    console.log(this.telemetryDetails);
    }

}
