import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService, private router: Router) { }

  loggedIn() {
    if (this.profileService.isLoggedIn() === false) {
      this.router.navigate(['/auth']);
    } else {
      console.log(this.profileService.isLoggedIn());
      return true;
    }
  }

  ngOnInit() {
  }

}
