import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SetupComponent } from './Components/setup/setup.component';


const appRoute: Routes = [
  {path: '', component: AppComponent},
  {path: 'setup', component: SetupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
