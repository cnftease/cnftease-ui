import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { APIService } from 'src/app/API.service';
//import { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import {Auth} from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
  providers: [],
})
export class AccountInfoComponent implements OnInit {
  isLoading = false;

  currentUser: any | null;
  //currentUserAttributes: CognitoUserAttribute[] | undefined;
  formGroup: FormGroup;

  get usernameControl() { return this.formGroup.controls['username'] as FormControl;}
  get emailControl() { return this.formGroup.controls['email'] as FormControl;}
  get phoneControl() { return this.formGroup.controls['phone'] as FormControl;}
  get discordControl() { return this.formGroup.controls['discord'] as FormControl;}
  get twitterControl() { return this.formGroup.controls['twitter'] as FormControl;}
  get bioControl() { return this.formGroup.controls['bio'] as FormControl;}

  constructor(private formBuilder: FormBuilder, private currentRoute: ActivatedRoute, private auth: AuthService) {
    this.currentUser = auth.currentUser;
    
    this.formGroup = this.formBuilder.group({
      username: [this.currentUser.username],
      email: [this.currentUser.attributes.email],
      phone: [this.currentUser.attributes.phone_number],
      twitter: [this.currentUser.attributes.twitter_username],
      discord: [this.currentUser.attributes.discord_username],
      bio: [this.currentUser.attributes.bio],
    });
  }

  ngOnInit() {
  }

  async onUpdate(form: NgForm){
    if (form.valid) {
      this.isLoading = true;
      console.log(this.currentUser)
      await this.auth.updateUserInfo(Auth.currentUserPoolUser, [{
        twitter_username: this.twitterControl.value,
        discord_username: this.twitterControl.value,
        bio: this.bioControl.value
      }]);
    }
  }
}
