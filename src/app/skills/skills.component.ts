import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills:Array <string>=['Розробка тендерної документації','Проведення відкритих торгів, відкритих торгів з публікацією англійською мовою, переговорна процедура, спрощена процедура, запит ціни пропозиції, публікацію звіту про укладений договір', 'Розробка рішень уповноваженої особи','Підготовка проекту договору, додаткових угод до договору']

  // skill1:string = 'Розробка тендерної документації'
  // skill2:string = 'Проведення відкритих торгів, відкритих торгів з публікацією англійською мовою, переговорна процедура, спрощена процедура, запит ціни пропозиції, публікацію звіту про укладений договір'
  // skill3:string = 'Розробка рішень уповноваженої особи'
  // skill4:string = 'Підготовка проекту договору, додаткових угод до договору'
  dia:string = '../../assets/certificate/dia.png'
  korean1:string = '../../assets/certificate/1.png'
  korean2:string = '../../assets/certificate/2.png'
}
