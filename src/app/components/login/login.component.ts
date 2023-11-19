// import { Component, OnInit } from '@angular/core';
// import { OktaAuthService } from '@okta/okta-angular';
// import auth
// import * as oktaSignin from '@okta/okta-signin-widget';
// import myAppConfig from 'src/app/config/my-app-config';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit{

//   oktaSignin: any;

//   constructor(private oktaAuthService: OktaAuthService){
//     this.oktaSignin = new this.oktaSignin({
//       logo: 'assets/images/logo.png',
//       baseUrl: myAppConfig.oidc.issuer.split('/oauth2')[0],
//       clientId: myAppConfig.oidc.clientId,
//       redirectUri: myAppConfig.oidc.redirectUri,
//       authParams: {
//         //proof key for code exchange
//         pkce: true,
//         issuer: myAppConfig.oidc.issuer,
//         scopes: myAppConfig.oidc.scopes
//       }
//     });
//   }

//   ngOnInit(): void {
//     this.oktaSignin.remove();

//     this.oktaSignin.renderEl({
//       //render element with given id
//       //this name should be same as div tag id in login.component.html
//       el: '#okta-sign-in-widget'},
//       (response) => {
//         if(response.status === 'SUCCESS'){
//           this.oktaAuthService.signInWithRedirect();
//         }
//       },
//       (error) => {
//         throw error;
//       }

//     )
//   }

// }
