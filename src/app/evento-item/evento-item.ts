import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../interfaces/ievent';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-evento-item',
  standalone: true,
  imports: [],
  templateUrl: './evento-item.html',
  styleUrl: './evento-item.css',
})
export class EventoItem {
  @Input() event!: IEvent;
  @Output() delete = new EventEmitter<string>();

  constructor(private eventosService: EventoService) {}

  deleteEvento() {
    this.eventosService.deleteEvento(this.event.id!).subscribe({
      next: () => {
        this.delete.emit(this.event.id);
      },
      error: (err) => {
        console.error('Error al borrar el evento:', err);
      }
    });
  }
}
