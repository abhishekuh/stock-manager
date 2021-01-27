import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from '../../src/app/homepage/homepage.component' 
import { AboutComponent } from './about/about.component';
import { AddStockComponent } from "../app/add-stock/add-stock.component";
import { StockDetailComponent } from './stock-detail/stock-detail.component';


const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path:'home' , component:HomepageComponent },
  { path:'about' , component:AboutComponent },
  { path:'addNewStock' , component: AddStockComponent },
  { path:'stockDetailView/:id',component:StockDetailComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
