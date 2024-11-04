import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() pageChange = new EventEmitter<string>();  // Événement émis vers le parent

  favoriteMessage: string = '';

  save() {
    localStorage.setItem("liked", "true");
    this.favoriteMessage = "Merci d'avoir aimé nos produits!";
  }

  ngOnInit() {
    if (localStorage.getItem('liked') === 'true') {
      this.favoriteMessage = "Merci d'avoir aimé nos produits!";
    }
  }

  changePageToTous() {
    this.pageChange.emit('tous');  // Emission de l'événement
  }
}
