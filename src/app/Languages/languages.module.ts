import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EnglishComponent } from '../Languages/english/english.component';
import { TeluguComponent } from '../Languages/telugu/telugu.component';
import { KannadaComponent } from '../Languages/kannada/kannada.component';
const routes: Routes = [
  { path: 'English', component: EnglishComponent },
  { path: 'kannada', component: KannadaComponent },
  { path: 'Telugu', component: TeluguComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class LanguagesModule { }
