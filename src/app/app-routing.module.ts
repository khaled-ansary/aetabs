import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'ambigram', loadChildren: './ambigram/ambigram.module#AmbigramPageModule' },
  { path: 'family', loadChildren: './family/family.module#FamilyPageModule' },  { path: 'aeauth', loadChildren: './aeauth/aeauth.module#AeauthPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }