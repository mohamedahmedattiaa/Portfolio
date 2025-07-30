import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home'; 
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';
import { AboutMe } from './about-me/about-me';
import { ContactUs } from './contact-us/contact-us';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: Home },
  { path: 'projects', component: Projects },
  { path: 'skills', component: Skills },
  { path: 'about-me', component: AboutMe },
  { path: 'contact-us', component: ContactUs },
  { path: '**', redirectTo: 'home' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
