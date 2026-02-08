import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/ievent';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private eventosEndpoint = 'http://localhost:3000/eventos';

  constructor(private http: HttpClient) {}
  getEventos(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.eventosEndpoint).pipe(
      catchError(this.handleError) // Capturamos posibles errores [cite: 13, 237]
    );
  }

  addEvento(evento: IEvent): Observable<IEvent> {
    return this.http.post<IEvent>(this.eventosEndpoint, evento).pipe(
      catchError(this.handleError)
    );
  }

  deleteEvento(id: string): Observable<any> {
    return this.http.delete<any>(`${this.eventosEndpoint}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(`Código de error: ${error.status}, mensaje: ${error.message}`);
    return throwError(() => new Error('Error en la comunicación con el servidor.'));
  }
}
