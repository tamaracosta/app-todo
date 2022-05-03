import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {
  @Output() valorDigitadoFilho = new EventEmitter<any>()
  valorInicial = "inicial"

  constructor() { }

  ngOnInit(): void {
  }

  onKey(valor: string){
    this.valorInicial = valor
    this.valorDigitadoFilho.emit(valor)

  }




}
