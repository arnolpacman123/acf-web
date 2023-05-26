import { Component, ViewChild } from '@angular/core';
import { MatDatepicker } from "@angular/material/datepicker";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { AcfService } from '@app/modules/private/services/acf.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: [ './championships.component.scss' ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [ MAT_DATE_LOCALE ] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class ChampionshipsComponent {

  champions: any[] = [];

  @ViewChild('picker', { static: false }) picker!: MatDatepicker<Date>;

  constructor( private acf : AcfService ) {
    this.acf.getChampionsAll()
    .subscribe((data : any) => {
      console.log(data);

    })

    console.log(this.champions);

  }



  openDatePicker(): void {
    this.picker.open();
  }
}
