import { Component } from '@angular/core';
import * as moment from 'moment';
import {Moment} from 'moment';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  name:string = 'Козинець Тетяна Михайлівна'
  phone:number = 2013947053
  email:string = 'Shahdi007@gmail.com'
  city:string = 'Хмельницький'
  photo:string = '../../assets/resume/44BE9C2F-6999-49BF-92EE-F073ED27F5F1_1_105_c.jpeg'
  git:string = 'https://github.com/purpoison'
  link:string = 'https://www.linkedin.com/in/tetiana-kozynets-551b03184/'
  fb:string = 'https://www.facebook.com/tatiana.leto.5/'
  salary:number = 5000
  course:number = 0.65
  flag:boolean = true
  age:number = 28
  newDate:any = moment('1994-03-26')
  dateNow:any = moment().format()
  tm:any
  info:string = 'hello'
  rs:any
  constructor(){
    this.rs = (this.newDate.diff(moment().format(), 'year')) * -1;
  }





  inc(){
    this.age++;
  }
  dec(){
    this.age--;
  }

  consoleInfo(info:any){
    console.log(info);
  }
  consoleEvent(e:any){
    console.log(e);
  }
  consoleEventType(e:any){
    console.log(e.type);
  }
}
