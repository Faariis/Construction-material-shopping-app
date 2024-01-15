import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proizvodi } from '../proizvodi';
import { ProduktiService } from '../services/produkti.service';


@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.component.html',
  styleUrls: ['./proizvodi.component.css']
})

export class ProizvodiComponent implements OnInit{
  public proizvodi: Proizvodi[] = [];
  public updateProizvodi: Proizvodi;
  public deleteProizvodi: Proizvodi;
  title = 'front';
  

  constructor(private produktService: ProduktiService){}

  ngOnInit() {
    this.getProizvod();
  }

  public getProizvod(): void {
    this.produktService.getProizvodi().subscribe({
      next:(response: Proizvodi[]) => this.proizvodi = response,
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

 // public onOpenModal() {}

  public onAddProizvod(addForm: NgForm): void {
    document.getElementById('add-proizvodi-form')
    this.produktService.addProizvod(addForm.value).subscribe(
      (response: Proizvodi) => {
        console.log(response);
        this.getProizvod();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  

  public onUpdateProizvod(proizvodi: Proizvodi): void {
    document.getElementById('update-proizvodi-modal')
    this.produktService.updateProizvod(proizvodi).subscribe(
      (response: Proizvodi) => {
        console.log(response);
        this.getProizvod();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  

public searchProizvod(key: string): void {
  const results: Proizvodi[] = [];
  for (const proizvod of this.proizvodi) {
    if (proizvod.naziv.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1) {
      results.push(proizvod);
    }
  }
  this.proizvodi = results;
  if (results.length === 0 || !key) {
    this.getProizvod();
  }
}
  public onOpenModal(proizvodi: Proizvodi, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-target', '#addProizvodModal');
    }
    
    if (mode === 'edit') {
      this.updateProizvodi = proizvodi;
      button.setAttribute('data-target', '#updateProizvodModal');
    }
    if (mode === 'delete') {
      this.deleteProizvodi = proizvodi;
      button.setAttribute('data-target', '#deleteProizvodModal');
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
