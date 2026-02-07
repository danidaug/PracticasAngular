import { Component, OnInit } from '@angular/core';
import { IEvent } from '../interfaces/ievent';
import { FormsModule } from '@angular/forms';
import { EventFilterPipe } from "../pipes/event-filter-pipe";
import { EventoItem } from '../evento-item/evento-item';
import { EventoAdd } from "../evento-add/evento-add";
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-events-show',
  standalone: true,
  imports: [FormsModule, EventFilterPipe, EventoItem, EventoAdd],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow implements OnInit {
  filterSearch: string = '';
  events: IEvent[] = [];

  constructor(private eventoService: EventoService) {}

  ngOnInit(): void {
    this.events = this.eventoService.getEventos();
  }

  deleteEvento(eventoABorrar: IEvent) {
    this.events = this.events.filter(e => e !== eventoABorrar);
  }

  addEvento(nuevoEvento: IEvent) {
    this.events = [...this.events, nuevoEvento];
  }
}
