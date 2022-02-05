import { Component } from '@angular/core';
declare const M: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'countriesApp';

  ngOnInit() {
    M.AutoInit();
  }
}
