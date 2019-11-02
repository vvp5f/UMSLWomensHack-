import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService} from '../core/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: any;

  constructor(    
    public authService: AuthService,
    private route: ActivatedRoute,
    private location : Location,
    private userService : UserService
    ) { }

  ngOnInit() {
    
  }
  getLoggedIn()
  {
    return sessionStorage.getItem("isLoggedIn");
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
       this.userService.toggleLogoff();
       this.isLoggedIn = sessionStorage.getItem("isLoggedIn");
      this.location.back();
    }, (error) => {
      console.log("Logout error", error);
    });
  }

}
