import { Component } from '@angular/core';
//( obje demek) component annotacion typscript () sonra javascript e dönüştürüyor.
// [] array demek birden fazla css  kullanabilirsin demek.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // typescript tip güvenli olduğu için string parametresini destekliyor. tek tırnak cift tınak farketmez.
  //title:string="northeind"; sonuna noktalı virgül koymayabilirsin.
  title: string = 'northwind';
  user: string = 'davut';
  //any hersey olabilir {} object demek.

}
