import { Component } from '@angular/core';
import { IEvent } from '../interfaces/ievent';
import { FormsModule } from '@angular/forms';
import { EventFilterPipe } from "../pipes/event-filter-pipe";
import { EventoItem } from '../evento-item/evento-item';
import { EventoAdd } from "../evento-add/evento-add";
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-events-show',
  standalone: true,
  imports: [FormsModule, EventFilterPipe, EventoItem],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  eventos: IEvent[] = [];
  filterSearch: string = ''; // <--- Añade esta línea

  constructor(private eventosService: EventoService) {
    this.eventosService.getEventos().subscribe({
      next: (data) => this.eventos = data,
      error: (err) => console.error('Error al cargar eventos:', err) // Gestión de errores [cite: 388]
    });
  }

  borrarEvento(id: string) {
    this.eventos = this.eventos.filter(e => e.id !== id);
  }

  addEvento(nuevoEvento: IEvent) {
    this.eventos.push(nuevoEvento);
  }
}
