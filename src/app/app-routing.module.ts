import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.guard';
import { AuthService } from './auth/auth.service';
import { SignInComponent } from './auth/sign-in/sign-in.component';


const routes: Routes = [
  { path: '', redirectTo: 'whitepaper', pathMatch: 'full' },
  { path: 'funding', loadChildren: () => import('./modules/pages/page-funding/page-funding.module').then(m => m.PageFundingModule), },
  { path: 'profile', loadChildren: () => import('./modules/pages/page-profile/page-profile.module').then(m => m.PageProfileModule), canActivate: [AuthGuard]},
  { path: 'settings', loadChildren: () => import('./modules/pages/page-settings/page-settings.module').then(m => m.PageSettingsModule), canActivate: [AuthGuard] },
  { path: 'whitepaper', loadChildren: () => import('./modules/pages/page-whitepaper/page-whitepaper.module').then(m => m.PageWhitepaperModule) },
  { path: 'signin', component: SignInComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
