import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Dobavljaci } from '../dobavljaci';
import { DobavljaciService } from '../services/dobavljaci.service';

@Component({
  selector: 'app-dobavljaci',
  templateUrl: './dobavljaci.component.html',
  styleUrls: ['./dobavljaci.component.css']
})

export class DobavljaciComponent implements OnInit{
  public dobavljaci: Dobavljaci[] = [];
  public updateDobavljaci: Dobavljaci;
  public deleteDobavljaci: Dobavljaci;
  title = 'front';
  

  constructor(private dobavljacService: DobavljaciService){}

  ngOnInit() {
    this.getDobavljac();
  }

  public getDobavljac(): void {
    this.dobavljacService.getDobavljaci().subscribe({
      next:(response: Dobavljaci[]) => this.dobavljaci = response,
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

 // public onOpenModal() {}

  public onAddDobavljac(addForm: NgForm): void {
    document.getElementById('add-dobavljaci-form')
    this.dobavljacService.addDobavljaci(addForm.value).subscribe(
      (response: Dobavljaci) => {
        console.log(response);
        this.getDobavljac();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


  public onUpdateDobavljac(dobavljac: Dobavljaci): void {
    document.getElementById('update-dobavljaci-modal')
    this.dobavljacService.updateDobavljaci(dobavljac).subscribe(
      (response: Dobavljaci) => {
        console.log(response);
        this.getDobavljac();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  

public searchDobavljaci(key: string): void {
  const results: Dobavljaci[] = [];
  for (const dobavljac of this.dobavljaci) {
    if (dobavljac.naziv.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1) {
      results.push(dobavljac);
    }
  }
  this.dobavljaci = results;
  if (results.length === 0 || !key) {
    this.getDobavljac();
  }
}
  public onOpenModal3(dobavljac: Dobavljaci, mode: string): void {
    const container = document.getElementById('main3-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-target', '#addDobavljacModal');
    }
    
    if (mode === 'edit') {
      this.updateDobavljaci = dobavljac;
      button.setAttribute('data-target', '#updateDobavljacModal');
    }
    if (mode === 'delete') {
      this.deleteDobavljaci = dobavljac;
      button.setAttribute('data-target', '#deleteDobavljacModal');
    }
    
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
