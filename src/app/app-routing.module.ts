import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { DocumentComponent } from './document/document.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionComponent
  },
  {
    path: ':cat',
    component: CollectionComponent
  },
  {
    path: 'doc/:ref',
    component: DocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
