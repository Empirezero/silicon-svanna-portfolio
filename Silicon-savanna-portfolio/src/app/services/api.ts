import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/projects`);
  }

  getSkills(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/skills`);
  }

  getExperiences(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/experiences`);
  }

  sendContact(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/contact`, data);
  }
}