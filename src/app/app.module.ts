import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, config),
    ProfileModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }