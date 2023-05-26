import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment.prod';
import { Observable } from 'rxjs';


@Injectable()

export class AcfService {

  constructor( private http : HttpClient ) {
    console.log("acfService Listo");
   }

   getQuery( query : string ) {
     console.log(`${environment.apiBaseUrl}${query}`);
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
        return this.http.get(`${environment.apiBaseUrl}${query}`, { headers });
   }

   getChampionsAll() {
      return this.getQuery('/championships')
   }
}
