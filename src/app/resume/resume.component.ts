import { Component } from '@angular/core';

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
}
