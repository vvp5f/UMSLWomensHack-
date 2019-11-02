import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  showImageOne: boolean = false;
  showImageTwo: boolean = false;

  constructor() { }

  ngOnInit() {
    ;
  }

  toggleGame(game: number) {
    this.showImageOne = false;
    this.showImageTwo = false;

    if (game == 1) {
      this.showImageOne = true;
    }
    else if (game == 2) {
      this.showImageTwo = true;
    }
  }
}
