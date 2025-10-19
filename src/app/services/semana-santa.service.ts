import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SemanaSanta } from '../interfaces/noticia-request.model';

@Injectable({
  providedIn: 'root'
})
export class SemanaSantaService {
  private baseUrl = 'http://localhost:8080/api/semana-santa';

  constructor(private http: HttpClient) { }

  getAll(): Observable<SemanaSanta[]> {
    return this.http.get<SemanaSanta[]>(`${this.baseUrl}/all`);
  }

  save(evento: SemanaSanta): Observable<SemanaSanta> {
    return this.http.post<SemanaSanta>(`${this.baseUrl}/save`, evento);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getById(id: number): Observable<SemanaSanta> {
    return this.http.get<SemanaSanta>(`${this.baseUrl}/${id}`);
  }
}
