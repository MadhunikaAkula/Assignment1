import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FreetrailComponent}from'../trails/freetrail/freetrail.component';
import{MonthsComponent}from'../trails/months/months.component';
import { from } from 'rxjs';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import{NavComponent}from'../../helpers/nav.component';
const routes: Routes = [
  { path: 'months', component: MonthsComponent },
  { path: 'free', component: FreetrailComponent },
];

@NgModule({
  declarations: [FreetrailComponent,MonthsComponent,NavComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule
  ]
})
export class TrailsModule { }
