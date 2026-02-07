import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/ievent';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  getEventos(): IEvent[] {
    return [
      {
        title: 'Partido Valencia',
        image: 'partido01.jpg',
        date: '2026-02-10',
        description: 'Partido basket Valencia contra barça',
        price:20

      },
      {
        title: 'Partido Clarent',
        image: 'partido02.jpg',
        date: '2026-02-10',
        description: 'Partido basket Clarent contra Juventus',
        price:22

      }
    ]
  }
}
