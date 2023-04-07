import { Component } from '@angular/core';
import { InicialService } from 'src/app/service/inicial.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent {

  data: any;

  constructor(private dataService: InicialService) {}

  ngOnInit() {

    this.dataService.getDataInicial().subscribe({
      next: (v) => this.data = v,
      error: (e) => console.error("nextii ",e),
      complete: () => console.info('complete') 
  })
  }

}
