import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoticiaService } from 'src/app/services/noticia.service';
import { MarchaService } from 'src/app/services/marcha.service';
import { Agenda, Marcha, NoticiaRequest, SemanaSanta } from 'src/app/interfaces/noticia-request.model';
import { AgendaService } from 'src/app/services/agenda.service';
import { SemanaSantaService } from 'src/app/services/semana-santa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    '../admin-dashboard/admin-dashboard.component.scss',
    './home.component.scss',
  ],
})
export class HomeComponent implements OnInit {

  // Variables globales
  submitted = false;
  errorMessage = '';
  confirmMessage = '';
  showErrorModal = false;
  showSuccessModal = false;
  showConfirmModal = false;
  showCreateNoticiaModal = false;
  showCreateMarchaModal = false;
  showCreateAgendaModal = false;
  showCreateSemanaSantaModal = false;

  marchas: Marcha[] = [];
  agendas: Agenda[] = [];
  noticias: NoticiaRequest[] = [];
  semanaSanta: SemanaSanta[] = [];

  marchaIdToDelete: number | null = null;
  noticiaIdToDelete: number | null = null;
  agendaIdToDelete: number | null = null;
  semanaSantaIdToDelete: number | null = null;

  // Formularios
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

  semanaSantaForm = new FormGroup({
    titulo: new FormControl('', [Validators.required, Validators.maxLength(225)]),
    subtitulo: new FormControl(''),
    imagenURL: new FormControl(''),
    texto: new FormControl(''),
    diaActuacion: new FormControl('', [Validators.required]),
    horaEvento: new FormControl(''),
    ubicacion: new FormControl(''),
  });

  agendaForm = new FormGroup({
    titulo: new FormControl('', [Validators.required, Validators.maxLength(225)]),
    descripcion: new FormControl('', [Validators.required, Validators.maxLength(2000)]),
    fechaActuacion: new FormControl('', [Validators.required]),
    enlace: new FormControl('')
  });

  constructor(
    private noticiaService: NoticiaService,
    private marchaService: MarchaService,
    private agendaService: AgendaService,
    private semanaSantaService: SemanaSantaService,
  ) {}

  ngOnInit(): void {
    this.loadNoticias();
    this.loadMarchas();
    this.loadSemanaSanta();
    this.loadAgendas();
  }

  /* ===================== CARGAR DATOS ===================== */
  loadNoticias(): void {
    this.noticiaService.getAllNoticias().subscribe({
      next: (data) => this.noticias = data,
      error: (err) => this.showError(`Error al cargar noticias: ${err.message}`)
    });
  }

  loadMarchas(): void {
    this.marchaService.getAllMarchas().subscribe({
      next: (data) => this.marchas = data,
      error: (err) => this.showError(`Error al cargar marchas: ${err.message}`)
    });
  }

  loadSemanaSanta(): void {
    this.semanaSantaService.getAll().subscribe({
      next: (data) => this.semanaSanta = data,
      error: (err) => this.showError(`Error al cargar Semana Santa: ${err.message}`)
    });
  }

  loadAgendas(): void {
    this.agendaService.getAll().subscribe({
      next: (data) => this.agendas = data,
      error: (err) => this.showError(`Error al cargar agendas: ${err.message}`)
    });
  }

  /* ===================== FORMATEO DE DURACIÓN ===================== */
  parseISODurationToSeconds(duration: string): number {
    const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
    const matches = duration.match(regex);
    if (!matches) return 0;
    const hours = parseInt(matches[1] || '0', 10);
    const minutes = parseInt(matches[2] || '0', 10);
    const seconds = parseInt(matches[3] || '0', 10);
    return hours * 3600 + minutes * 60 + seconds;
  }

  formatSegundos(hhmmss: number): string {
    const horas = Math.floor(hhmmss / 3600);
    const minutos = Math.floor((hhmmss % 3600) / 60);
    const segundos = hhmmss % 60;
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(horas)}:${pad(minutos)}:${pad(segundos)}`;
  }

  formatISODuration(duration: string): string {
    const segundos = this.parseISODurationToSeconds(duration);
    return this.formatSegundos(segundos);
  }

  /* ===================== MAP FORM ===================== */
  private mapFormToMarcha(): Marcha {
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

  private mapFormToNoticia(): NoticiaRequest {
    const f = this.noticiaForm.value;
    return {
  titulo: f.titulo || '',
  subtitulo: f.subtitulo || '',
  imagenURL: f.imagenURL || '',
  texto: f.texto || '',
  id: 0,
};
  }

private mapFormToSemanaSanta(): SemanaSanta {
  const f = this.semanaSantaForm.value;

  return {
    id: 0,
    titulo: f.titulo || '',
    subtitulo: f.subtitulo || undefined,
    imagenURL: f.imagenURL || undefined,
    texto: f.texto || undefined,
    diaActuacion: f.diaActuacion || '',
    horaEvento: f.horaEvento || undefined,
    ubicacion: f.ubicacion || undefined,
  };
}

private mapFormToAgenda(): Agenda {
  const f = this.agendaForm.value;

  return {
    id: 0, 
    titulo: f.titulo || '',
    subtitulo: undefined, 
    imagenURL: undefined, 
    lugar: undefined,    
    texto: f.descripcion || undefined,
    fechaActuacion: f.fechaActuacion || '',
    horaEvento: undefined, 
  };
}



  /* ===================== CREAR / EDITAR ===================== */
  onSubmitNoticia(): void {
    if (!this.noticiaForm.valid) return this.showError('Formulario inválido');
    const noticia = this.mapFormToNoticia();
    this.noticiaService.saveNoticia(noticia).subscribe({
      next: () => { this.loadNoticias(); this.showCreateNoticiaModal = false; this.showSuccess('Noticia guardada correctamente'); this.noticiaForm.reset(); },
      error: (err) => this.showError(`Error al guardar noticia: ${err.message}`)
    });
  }

  onSubmitMarcha(): void {
    if (!this.marchaForm.valid) return this.showError('Formulario inválido');
    const marcha = this.mapFormToMarcha();
    this.marchaService.saveMarcha(marcha).subscribe({
      next: () => { this.loadMarchas(); this.showCreateMarchaModal = false; this.showSuccess('Marcha guardada correctamente'); this.marchaForm.reset(); },
      error: (err) => this.showError(`Error al guardar marcha: ${err.message}`)
    });
  }

  onSubmitSemanaSanta(): void {
    if (!this.semanaSantaForm.valid) return this.showError('Formulario inválido');
    const semanaSanta = this.mapFormToSemanaSanta();
    this.semanaSantaService.save(semanaSanta).subscribe({
      next: () => { this.loadSemanaSanta(); this.showCreateSemanaSantaModal = false; this.showSuccess('Evento Semana Santa guardado'); this.semanaSantaForm.reset(); },
      error: (err) => this.showError(`Error al guardar evento: ${err.message}`)
    });
  }

  onSubmitAgenda(): void {
    if (!this.agendaForm.valid) return this.showError('Formulario inválido');
    const agenda = this.mapFormToAgenda();
    this.agendaService.save(agenda).subscribe({
      next: () => { this.loadAgendas(); this.showCreateAgendaModal = false; this.showSuccess('Agenda guardada correctamente'); this.agendaForm.reset(); },
      error: (err) => this.showError(`Error al guardar agenda: ${err.message}`)
    });
  }

  /* ===================== ELIMINAR ===================== */
  deleteNoticia(id: number): void { this.noticiaIdToDelete = id; this.confirmMessage = '¿Eliminar noticia?'; this.showConfirmModal = true; }
  deleteMarcha(id: number): void { this.marchaIdToDelete = id; this.confirmMessage = '¿Eliminar marcha?'; this.showConfirmModal = true; }
  deleteSemanaSanta(id: number): void { this.semanaSantaIdToDelete = id; this.confirmMessage = '¿Eliminar evento Semana Santa?'; this.showConfirmModal = true; }
  deleteAgenda(id: number): void { this.agendaIdToDelete = id; this.confirmMessage = '¿Eliminar agenda?'; this.showConfirmModal = true; }

  confirmDelete(): void {
    if (this.noticiaIdToDelete) {
      this.noticiaService.deleteNoticia(this.noticiaIdToDelete).subscribe({ next: () => { this.loadNoticias(); this.showSuccess('Noticia eliminada'); }, error: (err) => this.showError(err.message) });
    }
    if (this.marchaIdToDelete) {
      this.marchaService.deleteMarcha(this.marchaIdToDelete).subscribe({ next: () => { this.loadMarchas(); this.showSuccess('Marcha eliminada'); }, error: (err) => this.showError(err.message) });
    }
    if (this.semanaSantaIdToDelete) {
      this.semanaSantaService.delete(this.semanaSantaIdToDelete).subscribe({ next: () => { this.loadSemanaSanta(); this.showSuccess('Evento Semana Santa eliminado'); }, error: (err) => this.showError(err.message) });
    }
    if (this.agendaIdToDelete) {
      this.agendaService.delete(this.agendaIdToDelete).subscribe({ next: () => { this.loadAgendas(); this.showSuccess('Agenda eliminada'); }, error: (err) => this.showError(err.message) });
    }
    this.cancelDelete();
  }

  cancelDelete(): void {
    this.showConfirmModal = false;
    this.noticiaIdToDelete = null;
    this.marchaIdToDelete = null;
    this.semanaSantaIdToDelete = null;
    this.agendaIdToDelete = null;
  }

  /* ===================== MODALES ===================== */
  showSuccess(message: string): void { this.confirmMessage = message; this.showSuccessModal = true; setTimeout(() => this.showSuccessModal = false, 3000); }
  showError(message: string): void { this.errorMessage = message; this.showErrorModal = true; }

}
