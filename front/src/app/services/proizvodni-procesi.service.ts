import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proizvodni_procesi } from '../proizvodniProcesi';

@Injectable({
  providedIn: 'root'
})
export class ProizvodniProcesiService {
  url = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }
  
  public getProizvodniProces(): Observable<Proizvodni_procesi[]> {
    return this.httpClient.get<Proizvodni_procesi[]>(`${this.url}/proizvodni_procesi/get`)
  }

  public addProizvodniProces(proizvodni_proces: Proizvodni_procesi): Observable<Proizvodni_procesi> {
    return this.httpClient.post<Proizvodni_procesi>(`${this.url}/proizvodni_procesi/add`, proizvodni_proces);
  }

  public updateProizvodniProces(proizvodni_proces: Proizvodni_procesi): Observable<Proizvodni_procesi> {
    return this.httpClient.patch<Proizvodni_procesi>(`${this.url}/proizvodni_procesi/update`, proizvodni_proces);
  }
/*
  public deleteProizvod(proizvod: Proizvodi): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/proizvodi/delete`, proizvod);
  }
 */ 
}
