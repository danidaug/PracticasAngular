import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../interfaces/ievent';

@Component({
  selector: 'app-evento-item',
  imports: [],
  templateUrl: './evento-item.html',
  styleUrl: './evento-item.css',
})
export class EventoItem {
  @Input() event!: IEvent
  @Output() delete = new EventEmitter<void>();

  deleteEvento() {
    this.delete.emit(); 
  }
}
