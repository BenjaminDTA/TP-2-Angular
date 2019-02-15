import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  @Input() collegue: Collegue;
  i = -998
  constructor() {
  }

  ngOnInit() {

  }
  onClickDeteste() {
    if (this.i > -1000) {
      this.i--;
      console.log('Le score du guguss sur la photo est : ' + this.i)
    } else if (this.i <= -1000) {
      console.log('On ne peut pas te hair plus que ça, FELICITATIONS')
    }
  }
  onClickAime() {

    if (this.i < 1000) {
      this.i++;
      console.log('Le score du guguss sur la photo est : ' + this.i)
    } else if (this.i >= 1000) {
      console.log('Trop de love se dégage de toi Mr Cupidon')
    }
  }
}
