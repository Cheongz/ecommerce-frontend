import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

   isAuthenticated: boolean = false;
   profileJson: string;

    constructor(public auth: AuthService, @Inject(DOCUMENT) private doc: Document){

    }

    ngOnInit(): void {

    //Subscribe to authentication state changes
    this.auth.user$.subscribe(
            (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
        )
    }

  getUserDetail() {
    if(this.isAuthenticated){

      //Fetch the logged in user details (user's claims)
      //user full name is exposed as a property name
    //   this.oktaAuthService.getUser().then(
    //     (res) =>{
    //       this.userFullName = res.name!;
    //     }
    //   );
    }
  }


    loginWithRedirect(): void{
        this.auth.loginWithRedirect();

    }

    logout(): void{
        // Terminates the session with Okta and removes current tokens.
        this.auth.logout({
            logoutParams:{
                returnTo: this.doc.location.origin
            }
        });
    }

}
