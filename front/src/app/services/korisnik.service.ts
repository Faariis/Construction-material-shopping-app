import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class KorisnikService {
  url = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  signup(data:any){
    return this.httpClient.post(this.url+"/korisnik/signup", data, {
      headers: new HttpHeaders().set('Content-Type', "application.json")
    })
  }
}
