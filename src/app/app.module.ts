import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BillGatesComponent } from './bill-gates/bill-gates.component';
import { HobbyComponent } from './hobby/hobby.component';
import { ResumeComponent } from './resume/resume.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'Bill_Gates', component: BillGatesComponent},
  {path: 'Hobby', component: HobbyComponent},
  {path: 'Resume', component: ResumeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BillGatesComponent,
    HobbyComponent,
    ResumeComponent,
    ExperienceComponent,
    SkillsComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
