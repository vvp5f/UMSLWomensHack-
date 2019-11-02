import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.scss']
})
export class PrizesComponent implements OnInit {
  prizeItems = [
    { name: 'Apple Giftcard', amount: '25', points: '100', imageurl: 'assets/img/AppleGiftcard.png' },
    { name: 'Cold Stone', amount: '25', points: '100', imageurl: 'assets/img/ColdStone.png' },
    { name: 'Nike', amount: '25', points: '100', imageurl: 'assets/img/Nike.png' },
    { name: 'Camera', amount: '69', points: '400',  imageurl: 'assets/img/Camera.png' },
    { name: 'Karaoke', amount: '89', points: '500',  imageurl: 'assets/img/Karaoke.png' },
    { name: 'Mermaid', amount: '35', points: '150', imageurl: 'assets/img/Mermaid.png' },

  ];
  constructor() { }

  ngOnInit() {
  }

}
