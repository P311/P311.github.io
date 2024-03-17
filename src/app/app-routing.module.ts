import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ProcessComponent } from './process/process.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShowcaseComponent } from './showcase/showcase.component';

const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'showcase', component: ShowcaseComponent },
  { path: '**', redirectTo: 'intro' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
