import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Proizvodi } from '../proizvodi';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProduktiService {
  url = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }
  
  public getProizvodi(): Observable<Proizvodi[]> {
    return this.httpClient.get<Proizvodi[]>(`${this.url}/proizvodi/get`)
  }

  public addProizvod(proizvod: Proizvodi): Observable<Proizvodi> {
    return this.httpClient.post<Proizvodi>(`${this.url}/proizvodi/add`, proizvod);
  }

  public updateProizvod(proizvod: Proizvodi): Observable<Proizvodi> {
    return this.httpClient.put<Proizvodi>(`${this.url}/proizvodi/update`, proizvod);
  }
/*
  public deleteProizvod(proizvod: Proizvodi): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/proizvodi/delete`, proizvod);
  }
 */ 
}
