import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proizvodni_procesi } from '../proizvodniProcesi';
import { ProizvodniProcesiService } from '../services/proizvodni-procesi.service';

@Component({
  selector: 'app-proizvodni-procesi',
  templateUrl: './proizvodni-procesi.component.html',
  styleUrls: ['./proizvodni-procesi.component.css']
})
export class ProizvodniProcesiComponent implements OnInit{
  public proizvodni_procesi: Proizvodni_procesi[] = [];
  public updateProizvodni_procesi: Proizvodni_procesi;
  public deleteProizvodni_procesi: Proizvodni_procesi;
  title = 'front';
  

  constructor(private proizvodniProcesiService: ProizvodniProcesiService){}

  ngOnInit() {
    this.getProizvodniProcesi();
  }

  public getProizvodniProcesi(): void {
    this.proizvodniProcesiService.getProizvodniProces().subscribe({
      next:(response: Proizvodni_procesi[]) => this.proizvodni_procesi = response,
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

 // public onOpenModal() {}

  public onAddProizvodniProcesi(addForm: NgForm): void {
    document.getElementById('add-proizvodni-proces-form')
    this.proizvodniProcesiService.addProizvodniProces(addForm.value).subscribe(
      (response: Proizvodni_procesi) => {
        console.log(response);
        this.getProizvodniProcesi();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  

  public onUpdateProizvodniProcesi(proizvodni_proces: Proizvodni_procesi): void {
    document.getElementById('update-proizvodni-proces-modal')
    this.proizvodniProcesiService.updateProizvodniProces(proizvodni_proces).subscribe(
      (response: Proizvodni_procesi) => {
        console.log(response);
        this.getProizvodniProcesi();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  

public searchProizvodniProcesi(key: string): void {
  const results: Proizvodni_procesi[] = [];
  for (const proizvodni_proces of this.proizvodni_procesi) {
    if (proizvodni_proces.naziv.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1) {
      results.push(proizvodni_proces);
    }
  }
  this.proizvodni_procesi = results;
  if (results.length === 0 || !key) {
    this.getProizvodniProcesi();
  }
}

  public onOpenModal4(proizvodni_procesi: Proizvodni_procesi, mode: string): void {
    const container = document.getElementById('main4-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-target', '#addProizvodniProcesModal');
    }
    
    if (mode === 'edit') {
      this.updateProizvodni_procesi = proizvodni_procesi;
      button.setAttribute('data-target', '#updateProizvodniProcesModal');
    }
    /*
    if (mode === 'delete') {
      this.deleteProizvodi = proizvodi;
      button.setAttribute('data-target', '#deleteProizvodModal');
    }
    */
    container?.appendChild(button);
    button.click();
  }
/*
  public onDeleteProizvod(dogadjajId: number): void {
    this.dogadjajService.deleteDogadjaj(dogadjajId).subscribe(
      (response: void) => {
        console.log(response);
        this.getDogadjaj();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
*/
}

