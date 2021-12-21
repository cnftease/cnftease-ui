import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
//import { AuthService } from '../auth/auth.service';
import { Auth } from 'aws-amplify';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  @Input() title: string = 'CNFTEASE.com';
  @Input() toggleControl: FormControl;
  username: any;
  currentUser: any;
  constructor(private router: Router, private auth: AuthService) {

  }

  isSignedIn() {
    return this.auth.currentUser ? true : false
  }

  getUsername(){
    return this.auth.currentUser.username
  }

  onDiscordClick(){
    window.open('https://discord.gg/w3C5Jmq7');
  }
  async onSignOut() {
    await Auth.signOut();
    this.auth.currentUser = null;
    this.router.navigate(['/'])
  }
}
