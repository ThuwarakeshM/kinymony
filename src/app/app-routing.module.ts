import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { DocumentComponent } from './document/document.component';

const routes: Routes = [
  {
    path: ':lang',
    component: CollectionComponent
  },
  {
    path: ':lang/:cat',
    component: CollectionComponent
  },
  {
    path: ':lang/:cat/:ref',
    component: DocumentComponent
  },
  {
    path: '**',
    redirectTo: '/en'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
