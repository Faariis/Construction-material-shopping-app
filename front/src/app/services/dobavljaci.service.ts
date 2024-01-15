import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dobavljaci } from '../dobavljaci';


@Injectable({
  providedIn: 'root'
})
export class DobavljaciService {
  url = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }
  
  public getDobavljaci(): Observable<Dobavljaci[]> {
    return this.httpClient.get<Dobavljaci[]>(`${this.url}/dobavljaci/get`)
  }

  public addDobavljaci(dobavljac: Dobavljaci): Observable<Dobavljaci> {
    return this.httpClient.post<Dobavljaci>(`${this.url}/dobavljaci/add`, dobavljac);
  }

  public updateDobavljaci(dobavljac: Dobavljaci): Observable<Dobavljaci> {
    return this.httpClient.patch<Dobavljaci>(`${this.url}/dobavljaci/update`, dobavljac);
  }
/*
  public deleteProizvod(proizvod: Proizvodi): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/proizvodi/delete`, proizvod);
  }
 */ 
}
