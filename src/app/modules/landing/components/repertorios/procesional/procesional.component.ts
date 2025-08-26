import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procesional',
  templateUrl: './procesional.component.html',
  styleUrls: ['./procesional.component.scss']
})
export class ProcesionalComponent implements OnInit{
  ngOnInit(): void {
    
  }
  repertorios = [
    {
      id: 1,
      codigoRepertorio: 'REP_PRO_001',
      titulo: 'Marcha Triunfal',
      autor: 'Juan Pérez',
      enlace: 'https://example.com/marcha_triunfal.pdf',
      fechaCreacion: '2025-08-26',
      duracion: '00:03:45'
    },
    {
      id: 2,
      codigoRepertorio: 'REP_PRO_002',
      titulo: 'Himno de la Agrupación',
      autor: 'María López',
      enlace: 'https://example.com/himno_agrupacion.pdf',
      fechaCreacion: '2025-08-26',
      duracion: '00:04:10'
    },
    {
      id: 3,
      codigoRepertorio: 'REP_ORD_001',
      titulo: 'Pasodoble Clásico',
      autor: 'Carlos García',
      enlace: 'https://example.com/pasodoble_clasico.pdf',
      fechaCreacion: '2025-08-26',
      duracion: '00:02:50'
    },
    {
      id: 4,
      codigoRepertorio: 'REP_ORD_002',
      titulo: 'Scherzo Musical',
      autor: 'Ana Fernández',
      enlace: 'https://example.com/scherzo_musical.pdf',
      fechaCreacion: '2025-08-26',
      duracion: '00:05:00'
    },
    {
      id: 5,
      codigoRepertorio: 'REP_PRO_003',
      titulo: 'Obertura Festiva',
      autor: 'Miguel Sánchez',
      enlace: 'https://example.com/overture_festiva.pdf',
      fechaCreacion: '2025-08-26',
      duracion: '00:06:15'
    }
  ];

}
