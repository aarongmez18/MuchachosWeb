export interface NoticiaRequest {
  id: number;
  titulo: string;
  subtitulo: string;
  imagenURL?: string;
  texto: string;
}
export interface Marcha {
  id: number;
  titulo: string;
  autor?: string;
  codigoRepertorio?: string;
  duracion?: number;
  enlace?: string;
}

export interface MarchaResponse {
  id: number;
  titulo: string;
  autor?: string;
  codigoRepertorio?: string;
  duracion?: string;
  enlace?: string;
}
export interface SemanaSanta {
  id: number;
  titulo: string;
  subtitulo?: string;
  imagenURL?: string;
  texto?: string;
  diaActuacion: string; // ISO date string
  mapaURL?: string;
  ubicacion?: string;
  horaEvento?: string;
  fechaCreacion?: string; // ISO date string
}
export interface Agenda {
  id: number;
  titulo: string;
  subtitulo?: string;
  imagenURL?: string;
  lugar?: string;
  texto?: string;
  fechaActuacion: string; // ISO date string
  horaEvento?: string;
  fechaCreacion?: string; // ISO date string
}





