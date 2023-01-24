import { Component } from '@angular/core';

@Component({
  selector: 'app-biggest-car',
  templateUrl: './biggest-car.component.html',
  styleUrls: ['./biggest-car.component.css']
})
export class BiggestCarComponent {
  title:string = 'BelAZ 75710'
  length:number = 20600
  width:number = 9870
  height:number = 8260
  weight:number = 840.5
  speed:number = 64
  img:string = '../../assets/vehicle/belaz-75710.jpg'
}
