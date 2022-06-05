import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'education',
      component: EducationComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
