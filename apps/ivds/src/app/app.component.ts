import { Component } from '@angular/core';

@Component({
  selector: 'frontend-work-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  logo = require('../assets/github.png').default;
  title = 'ivds';
}
