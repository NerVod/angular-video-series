import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'angular-video-series';

  getMin(a:number, b: number) {
    if( a < b) {
      return a
    } 
    return b
  }

}
