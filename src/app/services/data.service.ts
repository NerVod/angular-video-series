import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {  }
  getData() {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .pipe(catchError(
      (error) => {
        console.log(error);
        return throwError('Error fetch data')
      }
    ))
  }


}
