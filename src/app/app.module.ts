import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from './views/home/home.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ResumeComponent } from './views/resume/resume.component';
import { ProjectComponent } from './views/project/project.component';
import { ContactComponent } from './views/contact/contact.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {HorizontalTimelineComponent} from "app/horizontal-timeline/horizontal-timeline.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    ProjectComponent,
    ContactComponent,
    ExperienceComponent,
    AboutMeComponent,
    HorizontalTimelineComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
