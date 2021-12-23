import { Component, OnInit } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BlockfrostService, SortOrder } from 'src/app/core/services/blockfrost.service';
import { FormControl } from '@angular/forms';
import { Asset } from 'src/app/modules/wallet/models/Asset';
import { LogService } from 'src/app/core/services/log.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.scss'],
  providers: [BlockfrostService]
})
export class PageProfileComponent implements OnInit {
  enableWidgets = false;
  searchControl = new FormControl('');
  localCacheEnabled = true;
  cols = 3;
  showLeftNav: boolean = true;
  assets: Asset[] = [];
  //assetInfo: { unit: string, quantity: number };
  filteredAssets: Asset[] = [];
  mdq: MediaQueryList;
  mediaQueryListener: () => void;
  
  constructor(
    private observer: BreakpointObserver,
    private snackBar: MatSnackBar,
  ) {
    this.setupSearch();
    this.setupLayoutObservers();
  }

  setupSearch() {
    this.searchControl.valueChanges.subscribe(value => {
      this.searchByPolicyId(value);
    });
  }

  search(value: string) {
    this.searchByPolicyId(value);
  }

  searchByPolicyId(value: string) {
    if (value && value !== '') {
      this.filteredAssets = this.assets.filter(a => a.policy_id === value);
    } else {
      this.filteredAssets = this.assets;
    }
  }

  setupLayoutObservers() {
    this.observer.observe([
      Breakpoints.XSmall,
      Breakpoints.HandsetPortrait,
    ]).subscribe(result => {
      if (result.matches) {
        this.activateLayout(2);
      }
    });

    this.observer.observe([
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.HandsetLandscape,
      Breakpoints.WebPortrait,
    ]).subscribe(result => {
      if (result.matches) {
        this.activateLayout(3);
      }
    });

    this.observer.observe([
      Breakpoints.Large,
      Breakpoints.WebLandscape,
    ]).subscribe(result => {
      if (result.matches) {
        this.activateLayout(5);
      }
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 5 * 1000,
    });
  }

  activateLayout(cols: number) {
    this.cols = cols;
    this.showLeftNav = true;
  }

  async ngOnInit(): Promise<void> {}
}
