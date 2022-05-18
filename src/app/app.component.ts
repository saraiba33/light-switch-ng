import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'light-switch-ng';
  isOn = true;

  turnOffAndOn() {
    if (this.isOn === true) {
      return (this.isOn = false);
    } else {
      return (this.isOn = true);
    }
  }
}
