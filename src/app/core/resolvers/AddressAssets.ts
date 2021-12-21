// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
// import { Observable } from "rxjs/internal/Observable";
// import { SavedAddress } from "../models/SavedAddress";
// import { BlockfrostService } from "../services/blockfrost.service";
// import { LogService } from "../services/log.service";

// @Injectable({ providedIn: 'root' })
// export class AddressAssetsResolver implements Resolve<any> {
//     constructor(
//         private blockFrost: BlockfrostService,
//         private log: LogService,
//     ) { }

//     async resolve(
//         route: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot
//     ): Promise<Observable<any> | Promise<any> | any> {
        
//         const addresses: SavedAddress[] = this.blockFrost.getUserAddresses();

        
//         if (addresses) {
//             addresses.forEach((address,index) => {
//                 const assets: any[] = [];
//                 const addressDetails = this.blockFrost.getAddressDetails(address.address).subscribe(details => {
//                     this.blockFrost.getAddressAssets(details.stake_address).subscribe(addressAssets => {
//                         addressAssets.forEach((asset: any) => {
//                             assets.push(asset)
//                         }); 
//                     });
//                 });
//                 addresses[index].assets = assets
//             });
//         }
//         return addresses;
//     }
// }