import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {

  name = "tamara"

  constructor() { }

  ngOnInit(): void {
  }

  atualizaValor(valor: any){
    this.name = valor
  }

}
