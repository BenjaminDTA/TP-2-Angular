import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonjour-angular';
  unCollegue = {
    pseudo: 'Benji',
    score: '207',
    photoUrl: 'http://s1.lprs1.fr/images/2018/02/05/7541379_1-0-664984359_1000x625.jpg'
  }
}
