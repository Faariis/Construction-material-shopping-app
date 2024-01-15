import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DobavljaciComponent } from './dobavljaci/dobavljaci.component';

import { HomeComponent } from './home/home.component';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { ProizvodniProcesiComponent } from './proizvodni-procesi/proizvodni-procesi.component';
import { SignupComponent } from './signup/signup.component';
import { SirovineComponent } from './sirovine/sirovine.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'gradjevina',
    children: [
      {
        path: '',
        redirectTo: '/gradjevina/proizvodi',
        pathMatch: 'full',
      },
      {
        path: 'proizvodi', component: ProizvodiComponent,
      },
      {
        path: '',
        redirectTo: '/gradjevina/sirovine',
        pathMatch: 'full',
      },
      {
        path: 'sirovine', component: SirovineComponent,
      },
      {
        path: '',
        redirectTo: '/gradjevina/dobavljaci',
        pathMatch: 'full',
      },
      {
        path: 'dobavljaci', component: DobavljaciComponent,
      },
      {
        path: '',
        redirectTo: '/gradjevina/proizvodni_procesi',
        pathMatch: 'full',
      },
      {
        path: 'proizvodni_procesi', component: ProizvodniProcesiComponent,
      },
    ]
  },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
