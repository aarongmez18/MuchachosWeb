import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoticiaRequest, NoticiaService } from 'src/app/services/noticia.service';
import { MarchaService } from 'src/app/services/marcha.service';
import { Marcha } from 'src/app/interfaces/noticia-request.model';

 // ajusta según tu ruta

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    '../admin-dashboard/admin-dashboard.component.scss',
    './home.component.scss',
  ],
})
export class HomeComponent implements OnInit {

  submitted = false;
  errorMessage = '';
  marchas: any[] = [];
  confirmMessage = '';
  noticias: any[] = [];
  showErrorModal = false;
  showCreateModal = false;
  showSuccessModal = false;
  showConfirmModal = false;
  showCreateMarchaModal = false;
  marchaIdToDelete: number | null = null;
  noticiaIdToDelete: number | null = null;

  noticiaForm = new FormGroup({
    titulo: new FormControl('', [Validators.required, Validators.maxLength(225)]),
    subtitulo: new FormControl('', [Validators.required, Validators.maxLength(225)]),
    imagenURL: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    texto: new FormControl('', [Validators.required, Validators.maxLength(4000)]),
  });

marchaForm = new FormGroup({
  titulo: new FormControl('', [Validators.required, Validators.maxLength(225)]),
  autor: new FormControl('', [Validators.required, Validators.maxLength(225)]),
  codigoRepertorio: new FormControl('', [Validators.required]),
  duracion: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]), 
  enlace: new FormControl('', [Validators.required, Validators.maxLength(225)]),
});




  constructor(
  private noticiaService: NoticiaService,
  private marchaService: MarchaService,
  ) {}



  ngOnInit(): void {
    this.loadMarchas();
    this.loadNoticias();
  }

  loadMarchas(): void {
  this.marchaService.getAllMarchas().subscribe({
    next: (data) => this.marchas = data,
    error: (err) => this.showError(`Error al cargar marchas: ${err.message}`)
  });
}

// Convierte PTnHnMnS a segundos
parseISODurationToSeconds(duration: string): number {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const matches = duration.match(regex);

  if (!matches) return 0;

  const hours = parseInt(matches[1] || '0', 10);
  const minutes = parseInt(matches[2] || '0', 10);
  const seconds = parseInt(matches[3] || '0', 10);

  return hours * 3600 + minutes * 60 + seconds;
}

// Convierte segundos a HH:MM:SS
formatSegundos(hhmmss: number): string {
  const horas = Math.floor(hhmmss / 3600);
  const minutos = Math.floor((hhmmss % 3600) / 60);
  const segundos = hhmmss % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');

  return `${pad(horas)}:${pad(minutos)}:${pad(segundos)}`;
}

// Combinar las dos funciones para usar en template
formatISODuration(duration: string): string {
  const segundos = this.parseISODurationToSeconds(duration);
  return this.formatSegundos(segundos);
}



mapFormToMarcha(): Marcha {
  const f = this.marchaForm.value;
  return {
  codigoRepertorio: String(f.codigoRepertorio || ''),
  titulo: String(f.titulo || ''),
  autor: String(f.autor || ''),
  enlace: String(f.enlace || ''),
  duracion: Number(f.duracion || 0),
  id: 0,
};
}



deleteMarcha(id: number): void {
  this.confirmMessage = '¿Estás seguro de eliminar esta marcha?';
  this.marchaIdToDelete = id;
  this.showConfirmModal = true;
}

confirmDeleteMarcha(): void {
  if (this.marchaIdToDelete !== null) {
    this.marchaService.deleteMarcha(this.marchaIdToDelete).subscribe({
      next: () => {
        this.loadMarchas();
        this.showSuccess('Marcha eliminada correctamente');
      },
      error: (err) => this.showError(`Error al eliminar marcha: ${err.message}`)
    });
  }
  this.showConfirmModal = false;
}

cancelDeleteMarcha(): void {
  this.showConfirmModal = false;
  this.marchaIdToDelete = null;
}

onSubmitMarcha(): void {
  if (this.marchaForm.valid) {
    const marcha: Marcha = this.mapFormToMarcha();
    this.marchaService.saveMarcha(marcha).subscribe({
      next: () => {
        this.showCreateMarchaModal = false;
        this.showSuccess('Marcha creada correctamente');
        this.marchaForm.reset();
        this.loadMarchas();
      },
      error: (err) => this.showError(`Error al guardar marcha: ${err.message}`)
    });
  }else{
    this.showError('Formulario inválido');
  }
}


  private mapFormToNoticia(): NoticiaRequest {
    const f = this.noticiaForm.value;
    return {
      titulo: f.titulo || '',
      subtitulo: f.subtitulo || '',
      imagenURL: f.imagenURL || '',
      texto: f.texto || '',
    };
  }

  loadNoticias(): void {
    this.noticiaService.getAllNoticias().subscribe({
      next: (data) => this.noticias = data,
      error: (err) => this.showError(`Error al cargar noticias: ${err.message}`)
    });
  }

  deleteNoticia(id: number): void {
    this.confirmMessage = '¿Estás seguro de eliminar esta noticia?';
    this.noticiaIdToDelete = id;
    this.showConfirmModal = true;
  }

confirmDelete(): void {
  if (this.marchaIdToDelete !== null) {
    this.marchaService.deleteMarcha(this.marchaIdToDelete).subscribe({
      next: () => {
        this.loadMarchas();
        this.showSuccess('Marcha eliminada correctamente');
      },
      error: (err) => this.showError(`Error al eliminar marcha: ${err.message}`)
    });
  } else if (this.noticiaIdToDelete !== null) {
    this.noticiaService.deleteNoticia(this.noticiaIdToDelete).subscribe({
      next: () => {
        this.loadNoticias();
        this.showSuccess('Noticia eliminada correctamente');
      },
      error: (err) => this.showError(`Error al eliminar noticia: ${err.message}`)
    });
  }

  this.showConfirmModal = false;
  this.marchaIdToDelete = null;
  this.noticiaIdToDelete = null;
}


  

  cancelDelete(): void {
    this.showConfirmModal = false;
    this.noticiaIdToDelete = null;
  }

  onSubmitNoticia(): void {
    if (this.noticiaForm.valid) {
      const noticia: NoticiaRequest = this.mapFormToNoticia();
      this.noticiaService.saveNoticia(noticia).subscribe({
        next: () => {
          this.showCreateModal = false; 
          this.showSuccessModal = true; 
          setTimeout(() => {
            this.showSuccessModal = false; 
          }, 3000);
          this.submitted = false;
          this.noticiaForm.reset();
          this.loadNoticias();
        },
        error: (err) => this.showError(`Error al guardar noticia: ${err.message}`)
      });
    }else{
    this.showError('Formulario inválido');
  }
  }

  showSuccess(message: string): void {
    this.confirmMessage = message;
    this.showSuccessModal = true;
    setTimeout(() => this.showSuccessModal = false, 3000);
  }

  showError(message: string): void {
    this.errorMessage = message;
    this.showErrorModal = true;
  }
}
