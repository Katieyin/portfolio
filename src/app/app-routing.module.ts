import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ResumeComponent} from './views/resume/resume.component';
import {ProjectComponent} from './views/project/project.component';
import {ContactComponent} from './views/contact/contact.component';
import {ExperienceComponent} from './views/experience/experience.component';
import {AboutMeComponent} from './views/about-me/about-me.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  // { path: 'aboutme',  component: AboutMeComponent },
  { path: 'resume',  component: ResumeComponent },
  { path: 'project',  component: ProjectComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'experience',  component: ExperienceComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

