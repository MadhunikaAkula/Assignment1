import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from '../app/interceptors/interceptor';
/* configuring routes*/
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)
  },
  {
    path: 'Languages',
    loadChildren: () => import('./Languages/languages.module').then(m => m.LanguagesModule)
  },
  {
    path: 'trails',
    loadChildren: () => import('./trails/trails.module').then(m => m.TrailsModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./Configuaration/configuaration.module').then(m => m.ConfiguarationModule)
  }

];
@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule
    , BrowserAnimationsModule, HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
