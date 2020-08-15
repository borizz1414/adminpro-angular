import { Component, OnInit } from '@angular/core';

import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ]
})
export class Graficas1Component implements OnInit {

  graficos: any = {
    'grafico1':{
      'labels':['Con frijoles', 'Con natilla', 'Con tocino'],
      'data':[24,30,46],
      'type': 'doughnut',
      'leyenda':'El pan se come con'
    },
    'grafico2':{
      'labels':['Hombres', 'Mujeres'],
      'data':[4500, 6000],
      'type': 'doughnut',
      'leyenda':'Entrevistados'
    },
    'grafico3':{
      'labels':['Si', 'No'],
      'data':[95,5],
      'type': 'doughnut',
      'leyenda':'¿Le dan gases los frijoles?'
    },
    'grafico4':{
      'labels':['Si', 'No'],
      'data':[85,15],
      'type': 'doughnut',
      'leyenda':'¿Le importa que le den gases?'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
