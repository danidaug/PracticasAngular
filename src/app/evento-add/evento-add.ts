import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-evento-add',
  imports: [FormsModule],
  templateUrl: './evento-add.html',
  styleUrl: './evento-add.css',
})
export class EventoAdd {
  @Output() onAdd = new EventEmitter<any>();

  nuevoEvento ={
    title: '',
    description: '',
    image: '',
    date: '',
    price: 0
  };

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.onload = () => {
      this.nuevoEvento.image = reader.result as string;
    };
  }

  enviarFormulario() {
    this.onAdd.emit({ ...this.nuevoEvento });
    this.nuevoEvento = { title: '', description: '', image: '', date: '', price: 0 };
  }

}
