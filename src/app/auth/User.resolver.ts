import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<any> {
  constructor(private auth: AuthService) {
  }

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<Observable<any> | Promise<any> | any> {
    if(await this.auth.isSignedIn()){
      return this.auth.getUserInfo()
    }
  }
}