import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NoticiaRequest {
  titulo: string;
  subtitulo?: string;
  imagenURL?: string;
  texto: string;
}

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  private apiUrl = 'http://localhost:8080/api/noticia';

  constructor(private http: HttpClient) {}

  saveNoticia(noticia: NoticiaRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/save`, noticia);
  }

  getAllNoticias(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`);
  }

  deleteNoticia(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
