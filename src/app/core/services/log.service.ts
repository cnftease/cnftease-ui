import { Injectable } from '@angular/core';
import { ConsoleLogger } from '@aws-amplify/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  enabled: boolean
  constructor() {
    this.enabled=false
  }
  banner(message: string){
    this.log("------------------------------------")
    this.log(`${message}`)
    this.log("------------------------------------")
  }
  
  info(message: string){
    this.log(`INFO: ${message}`)
  }
  json(object: any){
    this.log(`JSON: ${JSON.stringify(object)}`);
  }
  error(message: string){
    this.log(`ERROR: ${message}`);
  }

  private log(message: string, error?: boolean){
    if(this.enabled && error){
      console.error(message);
    }
    else if(this.enabled){
      console.log(message)
    }
  }
}
