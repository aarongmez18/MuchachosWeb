export interface NoticiaRequest {
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
  duracion?: string;
  enlace?: string;
}



