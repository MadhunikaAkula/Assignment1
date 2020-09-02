import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{OrdersComponent}from'../Configuaration/orders/orders.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
]
@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
  ]
})
export class ConfiguarationModule { }
