import { Component } from '@angular/core';

@Component({
  selector: 'app-bill-gates',
  templateUrl: './bill-gates.component.html',
  styleUrls: ['./bill-gates.component.css']
})
export class BillGatesComponent {
  h1:string = 'Bill Gates'
  quotation1:string = 'Patience is a key element of success'
  quotation2:string = 'If you think your teacher is tough, wait till you get boss'
  quotation3:string = 'Life is not fair — get used to it!'
  quotation4:string = "Success is a lousy teacher. Це seduces smart people in thinking they can't lose"
  quotation5:string = 'Be nice to nerds..'
  title:string = 'Biography'
  text:string = 'William Henry Gates III (born October 28, 1955) is an American business magnate and philanthropist. He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.[2][3] During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being the largest individual shareholder until May 2014.[4] He was a major entrepreneur of the microcomputer revolution of the 1970s and 1980s.'
  link1:string = 'https://en.wikipedia.org/wiki/Bill_Gates'
  link2:string = 'https://www.gatesfoundation.org/'
  link3:string = 'https://www.gatesnotes.com/'
  link4:string = 'https://twitter.com/billgates'
  imglink:string = '../../assets/BillGates/Bill_Gates_2017_(cropped).jpg'
}
