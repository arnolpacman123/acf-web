import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-element-card',
  templateUrl: './new-element-card.component.html',
  styleUrls: ['./new-element-card.component.scss']
})
export class NewElementCardComponent {

  rutas = "championship";

  constructor(private router: Router) {

  }

  onButtonClick() {
    this.router.navigate(['new']);
  }


}
