import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* custom modules*/
import{AccountsModule}from'./accounts/accounts.module';


/* configuring routes*/
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AccountsModule,RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule
    ,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
