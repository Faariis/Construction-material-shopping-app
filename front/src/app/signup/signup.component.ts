import { Component } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  korisnik = {
    ime: '',
    prezime: '',
    email_adresa: '',
    password: '',
    uloga: '',
    broj_telefona: '',
    adresa: '',
  };

  constructor(private korisnikService: KorisnikService) {}

  onSubmit() {
    console.log('Submitting form with data:', this.korisnik);
    this.korisnikService.signup(this.korisnik).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}


/*import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  korisnik = {
    ime: '',
    prezime: '',
    email_adresa: '',
    password: '',
    uloga: '',
    broj_telefona: '',
    adresa: '',
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log('Submitting form with data:', this.korisnik);
    this.http.post('/signup', this.korisnik).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}


*/

/*@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

}*/
