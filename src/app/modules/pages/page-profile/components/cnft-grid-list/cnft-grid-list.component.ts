import { Component, Input, OnInit } from '@angular/core';
import { Asset } from 'src/app/modules/wallet/models/Asset';


@Component({
  selector: 'app-cnft-grid-list',
  templateUrl: './cnft-grid-list.component.html',
  styleUrls: ['./cnft-grid-list.component.scss']
})
export class CnftGridListComponent implements OnInit {
  @Input()assets: Asset[];
  @Input()columns: number = 3;
  constructor() {}

  ngOnInit(): void {
  }
}
