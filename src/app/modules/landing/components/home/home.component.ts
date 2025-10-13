import { Component } from '@angular/core';
import { NoticiaService } from 'src/app/services/noticia.service';
import { Noticia } from '../blog/interfaces/noticia.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponentLayout {
  
  
  ultimaNoticia?: Noticia;
  noticias: Noticia[] = [];
  heroTitle = 'Muchachos de Consolación';

  constructor(private readonly noticiaService: NoticiaService) {}

    ngOnInit() {
    this.loadNoticias();
  }

  loadNoticias(): void {
    this.noticiaService.getAllNoticias().subscribe({
      next: (data) => {
        this.noticias = data;
        this.ultimaNoticia = data[0];
      },
      error: (err) => {
        console.error('Error cargando noticias', err);
      }
    });
  }

}
