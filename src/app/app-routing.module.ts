import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { YourGuardGuard } from './your-guard.guard';

const routes: Routes = [
  {
    path: 'first-component/:id', component: FirstComponent, canActivate: [YourGuardGuard],
    children: [
      {path: 'child-a', component: ChildAComponent},
      {path: 'child-b', component: ChildBComponent},
    ]
},
  {path: 'second-component/:id', component: SecondComponent},
  {path: '**', component: FirstComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
