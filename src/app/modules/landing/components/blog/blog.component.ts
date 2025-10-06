import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Noticia } from './interfaces/noticia.interface';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class BlogComponent implements OnInit {

  noticias: Noticia[] = [];

  constructor(private noticiaService: NoticiaService) {}

    ngOnInit() {
    this.loadNoticias();
  }

  loadNoticias(): void {
    this.noticiaService.getAllNoticias().subscribe({
      next: (data) => {
        this.noticias = data;
      },
      error: (err) => {
        console.error('Error cargando noticias', err);
      }
    });
  }

}
