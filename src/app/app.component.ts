import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  @HostBinding('class') className = '';
  toggleControl: FormControl;

  title = 'CNFTease.com';
  currentUser: any;

  DARK_CLASS="dark-theme";
  LIGHT_CLASS="light-theme";
  /**
   *
   */
  constructor(
    private auth: AuthService,
    private overlay: OverlayContainer,
    @Inject(DOCUMENT) private document: Document,
  ) {
    const theme = localStorage.getItem("theme")
    if(!theme){
      localStorage.setItem("theme", "dark");
      this.toggleControl = new FormControl(true);
      this.selectTheme(true);
    }
    else{
      const darkMode = (theme === 'dark')
      this.toggleControl = new FormControl(darkMode);
      this.selectTheme(darkMode);
    }
  }

  async ngOnInit(): Promise<void> {    
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      localStorage.setItem("theme", (darkMode ? 'dark' : 'light'));
      this.selectTheme(darkMode);
    });

    if (this.auth.currentUser) {
      this.currentUser = this.auth.currentUser
    }
    else {
      try {
        await Auth.currentAuthenticatedUser()
        this.currentUser = await Auth.currentUserInfo()
        this.auth.currentUser = this.currentUser
        
      }
      catch {
        this.currentUser = undefined
      }
    }
  }

  public selectTheme(dark: boolean): void {
    if(dark){
      this.className=this.DARK_CLASS
      
      this.document.documentElement.classList.add(this.DARK_CLASS);
      this.document.documentElement.classList.remove(this.LIGHT_CLASS);
      // this.overlay.getContainerElement().classList.add(this.DARK_CLASS);
      // this.overlay.getContainerElement().classList.remove(this.LIGHT_CLASS);
      
    }
    else {
      this.className=this.LIGHT_CLASS
      this.document.documentElement.classList.add(this.LIGHT_CLASS);
      this.document.documentElement.classList.remove(this.DARK_CLASS);
      // this.overlay.getContainerElement().classList.remove(this.DARK_CLASS);
      // this.overlay.getContainerElement().classList.add(this.LIGHT_CLASS);
      
    }
  }
}
