import { APP_INITIALIZER, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpBackend, HttpClient, HttpClientModule} from '@angular/common/http';
import { ProductService } from './services/product.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthModule, AuthGuard } from '@auth0/auth0-angular';
import { mytestconfig as env } from './config/mytestconfig'

import { OktaAuthModule, OktaConfig, OktaAuthConfigService, OktaCallbackComponent} from '@okta/okta-angular';
import { OktaAuth, OktaAuthOptions } from '@okta/okta-auth-js';
import { map, take, tap } from 'rxjs';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { MembersPageComponent } from './components/members-page/members-page.component';

// const oktaConfig = ({
//   clientId: 'v6XqLRitZG3MQWRSe4YhMzeZYd0famoI',
//   issuer: 'http://dev-d5vnjpvlgim4m5g4.us.auth0.com/oauth2/default',
//   redirectUri: 'http://localhost:4200/login/callback',
//   scopes: ['openid', 'profile', 'email']
// });


const routes: Routes = [
  //normally need to parse the response and store the OAuth+OIDC tokens. but this OktaCallbackComponent does this for us ady
  //{path: 'login/callback', component: OktaCallbackComponent},
  // {path: 'login', component: LoginComponent},
  {path: 'members', component: MembersPageComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: LoginStatusComponent, canActivate: [AuthGuard]},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'search/:keyword', component: ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
];

// function configInitializer(configService: OktaAuthConfigService, httpBackend: HttpBackend): () => void{
//   return () =>
//   new HttpClient(httpBackend)
//   .get('')
//   .pipe(
//     map((res: any) => ({
//       issuer: res.issuer,
//       clientId: res.clientId,
//       redirectUri: 'http://localhost:4200/login/callback'
//     })),
//     tap((authConfig: OktaAuthOptions) => {
//       const oktaAuth = new OktaAuth(authConfig);
//       const moduleConfig: OktaConfig = {oktaAuth};
//       configService.setConfig(moduleConfig);
//     }),
//     take(1)
//   );
// };

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartDetailsComponent,
    CartStatusComponent,
    CheckoutComponent,
    LoginStatusComponent,
    MembersPageComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

// , [{
//   provide: APP_INITIALIZER,
//   useFactory: configInitializer,
//   deps: [OktaAuthConfigService, HttpBackend],
//   multi: true
// }]