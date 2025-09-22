import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoticiaRequest, NoticiaService } from 'src/app/services/noticia.service';
 // ajusta según tu ruta

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    '../admin-dashboard/admin-dashboard.component.scss',
    './home.component.scss',
  ],
})
export class HomeComponent {

  constructor(private noticiaService: NoticiaService) {}

  noticiaForm = new FormGroup({
    titulo: new FormControl('', [Validators.required, Validators.maxLength(225)]),
    subtitulo: new FormControl('', [Validators.required, Validators.maxLength(225)]),
    imagenURL: new FormControl('', [Validators.maxLength(255)]),
    texto: new FormControl('', [Validators.required, Validators.maxLength(4000)]),
  });

  private mapFormToNoticia(): NoticiaRequest {
    const f = this.noticiaForm.value;
    return {
      titulo: f.titulo || '',
      subtitulo: f.subtitulo || '',
      imagenURL: f.imagenURL || '',
      texto: f.texto || '',
    };
  }

  onSubmitNoticia(): void {
    if (this.noticiaForm.valid) {
      const noticia: NoticiaRequest = this.mapFormToNoticia();
      this.noticiaService.saveNoticia(noticia).subscribe({
        next: () => alert('Noticia guardada con éxito'),
        error: (err) => alert('Error al guardar noticia: ' + err.message)
      });
    }
  }
}
