import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  private error$ = new Subject<string>();
  private terminoBusqueda$ = new Subject<string>();
  constructor(private http: HttpClient) { }

  setError(mensaje: string) {
    this.error$.next(mensaje);
  }

  getError(): Observable<string> {
    return this.error$.asObservable();
  }

  setTerminoBusqueda(termino: string) {
    this.terminoBusqueda$.next(termino);
  }

  getTerminoBusqueda() {
    return this.terminoBusqueda$.asObservable();
  }

  getImagenes(termino: string): Observable<any> {
    const KEY = '44289982-3292ba4a14c29699afbe33781';
    const URL = `https://pixabay.com/api/?key=${KEY}&q=${termino}`;
    return this.http.get(URL, {
      observe: 'body'
    });
  }



}
