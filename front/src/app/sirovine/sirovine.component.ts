import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SirovineService } from '../services/sirovine.service';
import { Sirovine } from '../sirovine';

@Component({
  selector: 'app-sirovine',
  templateUrl: './sirovine.component.html',
  styleUrls: ['./sirovine.component.css']
})

export class SirovineComponent implements OnInit{
  public sirovine: Sirovine[] = [];
  public updateSirovine: Sirovine;
  public deleteSirovine: Sirovine;
  title = 'front';
  

  constructor(private sirovineService: SirovineService){}

  ngOnInit() {
    this.getSirovinu();
  }

  public getSirovinu(): void {
    this.sirovineService.getSirovine().subscribe({
      next:(response: Sirovine[]) => this.sirovine = response,
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

 // public onOpenModal() {}

  public onAddSirovinu(addForm: NgForm): void {
    document.getElementById('add-sirovine-form')
    this.sirovineService.addSirovinu(addForm.value).subscribe(
      (response: Sirovine) => {
        console.log(response);
        this.getSirovinu();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  

  public onUpdateSirovinu(sirovine: Sirovine): void {
    document.getElementById('update-sirovine-modal');
    this.sirovineService.updateSirovinu(sirovine).subscribe(
      (response: Sirovine) => {
        console.log(response);
        this.getSirovinu();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  

public searchSirovinu(key: string): void {
  const results: Sirovine[] = [];
  for (const sirovina of this.sirovine) {
    if (sirovina.naziv.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1) {
      results.push(sirovina);
    }
  }
  this.sirovine = results;
  if (results.length === 0 || !key) {
    this.getSirovinu();
  }

}
  public onOpenModal1(sirovine: Sirovine, mode: string): void {
    const container = document.getElementById('main2-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-target', '#addSirovinuModal');
    }
    
    if (mode === 'edit') {
      this.updateSirovine = sirovine;
      button.setAttribute('data-target', '#updateSirovinuModal');
    }
    /*
    if (mode === 'delete') {
      this.deleteProizvodi = proizvodi;
      button.setAttribute('data-target', '#deleteDogadjajModal');
    }*/

    container?.appendChild(button);
    button.click();
  }
/*
  public onDeleteDogadjaj(dogadjajId: number): void {
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
