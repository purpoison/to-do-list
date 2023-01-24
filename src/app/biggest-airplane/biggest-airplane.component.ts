import { Component } from '@angular/core';

@Component({
  selector: 'app-biggest-airplane',
  templateUrl: './biggest-airplane.component.html',
  styleUrls: ['./biggest-airplane.component.css']
})
export class BiggestAirplaneComponent {
    title:string = 'Літак Ан-225 «Мрія»'
    price:number = 300000
    date:string = '21 грудня 1988'
    length:number = 84
    wing:number = 88.40
    area:number = 905.0
    height:number = 18.1
    img:string = '../../assets/vehicle/airplane.jpg'
}
