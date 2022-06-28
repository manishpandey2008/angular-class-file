import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './route/about/about.component';
import { BlogComponent } from './route/blog/blog.component';
import { HomeChild1Component } from './route/home-child1/home-child1.component';
import { HomeChild2Component } from './route/home-child2/home-child2.component';
import { PageNotFoundComponent } from './route/page-not-found/page-not-found.component';
import { PortfolioComponent } from './route/portfolio/portfolio.component';
import { ProfileComponent } from './route/profile/profile.component';

const routes: Routes = [
  {path:"home",component:BlogComponent,
    children:[
      {path:"child1",component:HomeChild1Component},
      {path:"child2",component:HomeChild2Component}
    ]
  },

  // {path:"home/child1",component:HomeChild1Component},
  // {path:"home/child2",component:HomeChild2Component},

  {path:"portfolio",component:PortfolioComponent},
  {path:"about",component:AboutComponent},


  {path:"profile/:schoolId/:studentId",component:ProfileComponent},

  {path:"**",component:PageNotFoundComponent}
  // {path:"**",redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
