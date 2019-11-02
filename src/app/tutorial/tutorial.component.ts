import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
  showVideo1: any = false;
  showVideo2: any = false;
  showVideo3: any = false;
  showVideo4: any = false;

  constructor() { }

  ngOnInit() {
  }

  toggleVideo(video: number) {
    this.showVideo1 = false;
    this.showVideo2 = false;
    this.showVideo3 = false;
    this.showVideo4 = false;
    if (video == 1) {
      this.showVideo1 = true;
    } else if (video == 2) {
      this.showVideo2 = true;
    } else if (video == 3) {
      this.showVideo3 = true;
    } else if (video == 4) {
      this.showVideo4 = true;
    }
  }
}
