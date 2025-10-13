import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marcha } from '../interfaces/noticia-request.model';

@Injectable({
  providedIn: 'root'
})
export class MarchaService {
  private apiUrl = 'http://localhost:8080/api/marcha'; 

  constructor(private http: HttpClient) {}

  getAllMarchas(): Observable<Marcha[]> {
    return this.http.get<Marcha[]>(`${this.apiUrl}/all`);
  }

  saveMarcha(marcha: Marcha): Observable<Marcha> {
    return this.http.post<Marcha>(`${this.apiUrl}/save`, marcha);
  }

  deleteMarcha(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}