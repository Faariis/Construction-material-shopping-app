import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
//import { SignupModule } from './signup/signup.module';
import { FormsModule } from '@angular/forms';
import { KorisnikService } from './services/korisnik.service';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { SirovineComponent } from './sirovine/sirovine.component';
import { DobavljaciComponent } from './dobavljaci/dobavljaci.component';
import { ProizvodniProcesiComponent } from './proizvodni-procesi/proizvodni-procesi.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SignupComponent,
    ProizvodiComponent,
    SirovineComponent,
    DobavljaciComponent,
    ProizvodniProcesiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
