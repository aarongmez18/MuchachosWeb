import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agenda } from '../interfaces/noticia-request.model';


@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private baseUrl = 'http://localhost:8080/api/agenda';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(`${this.baseUrl}/all`);
  }

  save(evento: Agenda): Observable<Agenda> {
    return this.http.post<Agenda>(`${this.baseUrl}/save`, evento);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getById(id: number): Observable<Agenda> {
    return this.http.get<Agenda>(`${this.baseUrl}/${id}`);
  }
}
