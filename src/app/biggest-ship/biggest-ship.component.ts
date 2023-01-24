import { Component } from '@angular/core';

@Component({
  selector: 'app-biggest-ship',
  templateUrl: './biggest-ship.component.html',
  styleUrls: ['./biggest-ship.component.css']
})
export class BiggestShipComponent {
  title:string = 'Knock Nevis'
  length:number = 458.45
  width:number = 68.6
  speed:number = 30.6
  img:string = '../../assets/vehicle/ship.jpg'
}
