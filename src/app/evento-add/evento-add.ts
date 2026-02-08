import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EventoService } from '../services/evento.service';
import { IEvent } from '../interfaces/ievent';

@Component({
  selector: 'app-evento-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './evento-add.html',
  styleUrl: './evento-add.css'
})
export class EventoAdd {
  nuevoEvento: IEvent = {
    title: '',
    description: '',
    image: '',
    date: '',
    price: 0
  };

  constructor(
    private eventosService: EventoService,
    private router: Router
  ) {}

  enviarFormulario() {
    this.eventosService.addEvento(this.nuevoEvento).subscribe({
      next: () => {
        this.router.navigate(['/eventos']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) return;

    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.onload = () => {
      this.nuevoEvento.image = reader.result as string;
    };
  }
}
