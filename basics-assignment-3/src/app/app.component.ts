import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showPswd = false;
  logs: Date[] = [];

  toggleShowPswd() {
    this.showPswd = !this.showPswd;

    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
    return this.showPswd;
  }
}
