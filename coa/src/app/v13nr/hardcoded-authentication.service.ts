import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  
  authenticate(username, password){

      if(username==='v13nr' && password === 'admin'){
        return true
      }

      return false
  }
}
