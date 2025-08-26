import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Noticia } from './interfaces/noticia.interface';

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

  ngOnInit() {
    // Simulación de datos de la BD
    this.noticias = [
      {
        titulo: 'Angular 17 Lanzado',
        subtitulo: 'Mejoras en rendimiento y SSR',
        imagen: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200',
        texto: 'Angular 17 trae mejoras importantes en compilación, standalone APIs y rendimiento...Angular 17 trae mejoras importantes en compilación, standalone APIs y rendimiento...Angular 17 trae mejoras importantes en compilación, standalone APIs y rendimiento...Angular 17 trae mejoras importantes en compilación, standalone APIs y rendimiento...Angular 17 trae mejoras importantes en compilación, standalone APIs y rendimiento...'
      },
      {
        titulo: 'Novedades en TypeScript',
        subtitulo: 'Versión 5.3 con nuevas funciones',
        imagen: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1200',
        texto: 'TypeScript sigue evolucionando con nuevas características...'
      },
      {
        titulo: 'Introducción a RxJS',
        subtitulo: 'Programación reactiva en Angular',
        imagen: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1200',
        texto: 'RxJS permite manejar flujos de datos de manera asíncrona y elegante...'
      }
    ];
  }
}
