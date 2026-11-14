import { Routes } from '@angular/router';
import { Catalog } from './catalog/catalog';       
import { Description } from './description/description'; 

export const routes: Routes = [
  { path: '', component: Catalog },                
  { path: 'description/:id', component: Description } 
];