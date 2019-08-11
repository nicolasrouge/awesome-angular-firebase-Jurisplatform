import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';

import { HomepageComponent } from '../page/homepage/homepage.component';
import { IntroComponent } from '../page/intro/intro.component';
import { GalleryComponent } from '../page/gallery/gallery.component';
import { ContentComponent } from '../page/content/content.component';
import { TestimonialComponent } from '../page/testimonial/testimonial.component';
import { FooterComponent } from '../page/footer/footer.component';
import { ClientComponent } from '../page/client/client.component';
import { PrincingComponent } from '../page/princing/princing.component';
import { HeaderComponent } from '../page/header/header.component';
import { SocialComponent } from '../page/social/social.component';
import { NavigationComponent } from '../page/navigation/navigation.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomepageComponent,
    IntroComponent, 
    GalleryComponent, 
    ContentComponent, 
    TestimonialComponent, 
    FooterComponent, 
    ClientComponent, 
    PrincingComponent, 
    HeaderComponent, 
    SocialComponent, 
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    NavbarComponent,
    RouterModule,
  ],
})
export class SharedModule { }