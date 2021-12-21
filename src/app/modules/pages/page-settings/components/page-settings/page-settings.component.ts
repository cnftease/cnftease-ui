import { Component } from '@angular/core';
import { MatListOption } from '@angular/material/list/selection-list';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
interface Section { name: string, path: string };
@Component({
  selector: 'app-page-settings',
  styleUrls: ['./page-settings.component.scss'],
  template: `
    <section>
      <div class="content-grid">
        <mat-card class="left-nav">
          <mat-card-header>
            <mat-card-title>
              {{pageTitle}}
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <mat-selection-list #sectionOptions (selectionChange)="onSectionSelectionChange(sectionOptions.selectedOptions.selected)" [multiple]="false">
              <mat-list-option *ngFor="let section of sections" [value]="section">
                <span>{{section.name}}</span>
              </mat-list-option>
            </mat-selection-list>
          </mat-card-content>
        </mat-card>
        <mat-card class="main">
          <router-outlet></router-outlet>
        </mat-card>
      </div>
    </section>
  `,
})
export class PageSettingsComponent {
  currentUser: any;
  selectedSection: { name: string, path: string } = {
    name: "Account Info",
    path: 'account',
  };
  pageTitle: string = 'Profile Dashboard';

  sections: Section[] = [
    { name: 'Account Info', path: 'account' },
    { name: 'Calendar', path: 'calendar' },
    { name: 'Security', path: 'security' },
    { name: 'Wallets', path: 'wallets' },
  ];

  onSectionSelectionChange(options: MatListOption[]) {
    this.selectedSection = options[0].value
    this.router.navigate([`/settings/${this.selectedSection.path}`])
  }

  constructor(private router: Router, private currentRoute: ActivatedRoute, private auth: AuthService) {
    this.currentRoute.data.subscribe((data) => {
      this.currentUser = data.currentUser;
      this.auth.currentUser = this.currentUser;
    })
  }
}
