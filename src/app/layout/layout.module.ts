import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    HomeComponent
   
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    
    
  ],
  exports: [
    
  ]
})
export class LayoutModule { }
