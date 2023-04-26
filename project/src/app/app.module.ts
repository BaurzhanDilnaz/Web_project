import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { StudyTipsComponent } from './study-tips/study-tips.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    StudyTipsComponent,
    SignInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'sign-in', component: SignInComponent},
      {path: 'study-tips', component: StudyTipsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
