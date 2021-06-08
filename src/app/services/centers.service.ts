import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Center } from '../models/center';
const baseUrl = 'http://localhost:3080/api/centers/';
@Injectable({
  providedIn: 'root'
})
export class CentersService {

  constructor(private http: HttpClient) { }
  getAllCenter(): Observable<Center[]> {
    return this.http.get<Center[]>(baseUrl);
  }

  createCenter(dataCenter: any) {
    console.log(dataCenter)
    return this.http.post(baseUrl,dataCenter);
  }

  updateCenter(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteOneCenter(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllAllCenter(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findCenterByNumber(subject_number: any): Observable<Center[]> {
    return this.http.get<Center[]>(`${baseUrl}?center=${subject_number}`);
  }

  findCenterByFirstName(center_name: any): Observable<Center[]> {
    return this.http.get<Center[]>(`${baseUrl}?center_name=${center_name}`);
  }
}


