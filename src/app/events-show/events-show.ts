import { Component } from '@angular/core';
import { IEvent } from '../interfaces/ievent';
import { FormsModule } from '@angular/forms';
import { EventFilterPipe } from "../pipes/event-filter-pipe";

@Component({
  selector: 'app-events-show',
  standalone: true,
  imports: [FormsModule, EventFilterPipe],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  filterSearch: string = '';
  events: IEvent[] = [
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
