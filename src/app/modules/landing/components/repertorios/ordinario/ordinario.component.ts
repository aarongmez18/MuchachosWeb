import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marcha } from 'src/app/interfaces/noticia-request.model';
import { MarchaService } from 'src/app/services/marcha.service';

@Component({
  selector: 'app-ordinario',
  templateUrl: './ordinario.component.html',
  styleUrls: ['./ordinario.component.scss']
})
export class OrdinarioComponent implements OnInit{
   repertoriosOrdinarios: Marcha[] = [];
  errorMessage = '';

  constructor(private readonly marchaService: MarchaService, private readonly router: Router) {}

  ngOnInit(): void {
    this.loadOrdinarioRepertorios();
  }

  loadOrdinarioRepertorios(): void {
    this.marchaService.getAllMarchas().subscribe({
      next: (data: Marcha[]) => {
        // Filtramos solo los que tienen código "ORDINARIO"
        this.repertoriosOrdinarios = data.filter(rep => rep.codigoRepertorio === 'ORDINARIO');
      },
      error: (err) => {
        this.errorMessage = `Error al cargar repertorios: ${err.message}`;
      }
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

    navigateTo(url: string) {
    const [path, fragment] = url.split('#');

    this.router.navigate([path], { fragment: fragment }).then(() => {
     
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }
}
