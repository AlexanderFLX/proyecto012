import { ArticulosService } from './articulos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'proyecto012';

  articulos = null;

  constructor( private articulosService: ArticulosService ) { }

  ngOnInit() {
    this.articulos = this.articulosService.retornar();
  }

}
