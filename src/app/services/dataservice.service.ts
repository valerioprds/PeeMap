import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://localhost:5000/api/v1/toilets';

  constructor(private http: HttpClient) { }

  fetchGeoJSON(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
