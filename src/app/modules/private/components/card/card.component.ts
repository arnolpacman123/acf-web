import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

// Este componente solo abarca la cabecera y el cuerpo de la tarjeta, no es una tarjeta completa
export class CardComponent {

  @Input() element: any;

  constructor() {

  }
}
