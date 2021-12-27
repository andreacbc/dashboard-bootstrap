import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  valores = [
    {
      cantidad: '15.236',
      titulo: 'Visitas'
    },
    {
      cantidad: '1.831',
      titulo: 'Registros'
    },
    {
      cantidad:'$160.454',
      titulo: 'Ingresos'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
