import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agenda } from 'src/app/interfaces/noticia-request.model';
import { AgendaService } from 'src/app/services/agenda.service';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  agendas: Agenda[] = [];
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private readonly agendaService: AgendaService, private readonly router: Router) { }

  ngOnInit(): void {
    this.loadAgendas();
  }

  loadAgendas(): void {
    this.loading = true;
    this.agendaService.getAll().subscribe({
      next: (data) => {
        this.agendas = data.sort((a, b) => a.fechaActuacion.localeCompare(b.fechaActuacion));
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Error al cargar las agendas.';
        this.loading = false;
      }
    });
  }

  
    navigateTo(url: string) {
    const [path, fragment] = url.split('#');

    this.router.navigate([path], { fragment: fragment }).then(() => {
     
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }
}
