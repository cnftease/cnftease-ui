import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-page-funding',
  templateUrl: './page-funding.component.html',
  styleUrls: ['./page-funding.component.scss']
})
export class PageFundingComponent implements OnInit {
  walletAddress = 'addr1qxt42e2lgkjqdlj8jnf2uklvey4upqyu9egjy9mr27ww5k6nhz5kekq8v42e5a8jnlg4e8dkky7pyspyvc2a55s2gqmsjsadqw'
  constructor(private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string) {
    this.snackbar.open(message, '', {
      duration: 2 * 1000,
      panelClass: ['copied']
    });
  }

}
