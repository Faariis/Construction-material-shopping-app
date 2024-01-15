import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sirovine } from '../sirovine';

@Injectable({
  providedIn: 'root'
})
export class SirovineService {
  url = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }
  
  public getSirovine(): Observable<Sirovine[]> {
    return this.httpClient.get<Sirovine[]>(`${this.url}/sirovine/get`)
  }

  public addSirovinu(sirovina: Sirovine): Observable<Sirovine> {
    return this.httpClient.post<Sirovine>(`${this.url}/sirovine/add`, sirovina);
  }

  public updateSirovinu(sirovina: Sirovine): Observable<Sirovine> {
    return this.httpClient.put<Sirovine>(`${this.url}/sirovine/update`, sirovina);
  }
/*
  public deleteProizvod(proizvod: Proizvodi): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/proizvodi/delete`, proizvod);
  }
 */ 
}
