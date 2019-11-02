import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  
  constructor(    
    public authService: AuthService,
    private route: ActivatedRoute,
    private location : Location
    ) { }

  ngOnInit() {
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.isLoggedIn = true;
      this.location.back();
    }, (error) => {
      console.log("Logout error", error);
    });
  }

}
