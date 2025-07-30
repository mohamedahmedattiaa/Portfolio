import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { ContactUs } from './contact-us/contact-us';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { AboutMe } from './about-me/about-me';
import { Navbar } from './navbar/navbar';

@NgModule({
  declarations: [
    App,
    Home,
    ContactUs,
    Skills,
    Projects,
    AboutMe,
    Navbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
