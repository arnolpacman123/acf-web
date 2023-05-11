import { Component } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.scss']
})
export class ChampionshipsComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
