import { Component, signal } from '@angular/core';
import { EventsShow } from './events-show/events-show';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ParcticaSemanas');
}
