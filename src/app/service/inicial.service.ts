import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicialService {
  private apiUrl = 'http://localhost:8080/api/test';

  constructor(private http: HttpClient) { }

  getDataInicial() {
    return this.http.get(this.apiUrl);
  }
}
