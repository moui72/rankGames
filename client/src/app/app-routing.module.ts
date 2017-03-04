import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';

// [x] TODO put public routes under /pub path and PubComponent template

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  providers: [
  ],
})

export class AppRoutingModule {}
