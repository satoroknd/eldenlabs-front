import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TelemetryDetails } from '../interfaces/telemetry-details';

@Injectable({
  providedIn: 'root'
})
export class TelemetryService {

  private getUrlTelemetryData = '/api/Telemetry/GetData';

  constructor(private  _http: HttpClient) { }

  getTelemetreyData() {
    return this._http.get<TelemetryDetails[]>(this.getUrlTelemetryData);
  }
}
