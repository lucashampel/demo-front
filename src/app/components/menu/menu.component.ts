import { Component } from '@angular/core';
import { InicialService } from 'src/app/service/inicial.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class AppMenu {

  data: any;

  constructor(private dataService: InicialService) {}

  ngOnInit() {
  
  }

}
