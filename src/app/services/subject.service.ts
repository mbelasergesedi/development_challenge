import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../models/subject.model';
const baseUrl = 'http://localhost:3080/api/subjects/';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }
  getAllSubject(): Observable<Subject[]> {
    return this.http.get<Subject[]>(baseUrl);
  }

  getOneSubject(id: any): Observable<Subject> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createSubject(dataSubject: any) {
    console.log(dataSubject)
    return this.http.post(baseUrl,dataSubject);
  }

  updateSubject(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteOneSubject(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllAllSubject(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findSubjectByNumber(subject_number: any): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${baseUrl}?subject_number=${subject_number}`);
  }

  findSubjectByFirstName(subject_firstname: any): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${baseUrl}?subject_firstname=${subject_firstname}`);
  }
}

