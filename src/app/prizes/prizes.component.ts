import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.scss']
})
export class PrizesComponent implements OnInit {
  prizeItems = [
    { name: 'Apple Giftcard', amount: '25', imageurl: 'assets/img/AppleGiftcard.png' },
    { name: 'Cold Stone', amount: '25', imageurl: 'assets/img/ColdStone.png' },
    { name: 'Nike', amount: '25', imageurl: 'assets/img/Nike.png' },
    { name: 'Camera', amount: '69', imageurl: 'assets/img/Camera.png' },
    { name: 'Karaoke', amount: '89', imageurl: 'assets/img/Karaoke.png' },
    { name: 'Mermaid', amount: '35', imageurl: 'assets/img/Mermaid.png' },

  ];
  constructor() { }

  ngOnInit() {
  }

}
