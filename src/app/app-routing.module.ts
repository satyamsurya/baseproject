import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { SigninComponent } from './layout/signin/signin.component';
import { SignupComponent } from './layout/signup/signup.component';
import { AboutComponent } from './users/about/about.component';



import { AddUserComponent } from './users/add-user/add-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListUsersComponent } from './users/list-users/list-users.component';

import { ViewUserComponent } from './users/view-user/view-user.component';

const routes: Routes = [


  {  


  
   
    
    path: 'users',
    children: [

      { path: 'home', component: HomeComponent },
      { path: 'login', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'list', component: ListUsersComponent },
      { path: 'delete/:id', component: DeleteUserComponent },
      { path: 'edit/:id', component: EditUserComponent },
      { path: 'view/:id', component: ViewUserComponent },
      { path: 'create', component: AddUserComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'about', component: AboutComponent },
    

    ]

  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
