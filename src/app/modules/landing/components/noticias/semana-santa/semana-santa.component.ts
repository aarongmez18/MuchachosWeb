import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SemanaSanta } from 'src/app/interfaces/noticia-request.model';
import { SemanaSantaService } from 'src/app/services/semana-santa.service';


@Component({
  selector: 'app-semana-santa',
  templateUrl: './semana-santa.component.html',
  styleUrls: ['./semana-santa.component.scss']
})
export class SemanaSantaComponent implements OnInit {

eventosPorAno: { [year: number]: SemanaSanta[] } = {};
anosOrdenados: number[] = [];

  loading: boolean = false;
  errorMessage: string = '';

  constructor(private readonly semanaSantaService: SemanaSantaService, private readonly router: Router) { }

  ngOnInit(): void {
    this.loadEventos();
  }

  loadEventos(): void {
    this.loading = true;

    this.semanaSantaService.getAll().subscribe({
      next: (data) => {
        // Ordenamos los eventos por fecha descendente (más reciente primero)
        const eventosOrdenados = data.sort(
          (a, b) => new Date(b.diaActuacion).getTime() - new Date(a.diaActuacion).getTime()
        );

        // Agrupar eventos por año
        this.eventosPorAno = {};
        eventosOrdenados.forEach(evento => {
          const year = new Date(evento.diaActuacion).getFullYear();
          if (!this.eventosPorAno[year]) {
            this.eventosPorAno[year] = [];
          }
          this.eventosPorAno[year].push(evento);
        });

        // Obtener años ordenados de mayor a menor
        this.anosOrdenados = Object.keys(this.eventosPorAno)
                                  .map(y => +y)
                                  .sort((a, b) => b - a);

        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Error al cargar los eventos de Semana Santa.';
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
