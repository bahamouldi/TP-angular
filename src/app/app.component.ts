import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage: string = 'home'; // Page par défaut

  showPage(page: string) {
    this.currentPage = page;
  }
}
