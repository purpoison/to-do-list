import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
firstCompany:string = 'Державне підприємство "Служба місцевих автодоріг"'
yearsF:string = '2017-2021'
secondCompany:string = 'Державна установа "Служба місцевих доріг Хмельниччини"'
yearsS:string = '2021-2022'
}
