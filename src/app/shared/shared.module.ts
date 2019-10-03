import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';

import { IntroComponent } from '../page/intro/intro.component';
import { GalleryComponent } from '../page/gallery/gallery.component';
import { ContentComponent } from '../page/content/content.component';
import { TestimonialComponent } from '../page/testimonial/testimonial.component';
import { FooterComponent } from '../page/footer/footer.component';
import { ClientComponent } from '../page/client/client.component';
import { PrincingComponent } from '../page/princing/princing.component';
import { HeaderComponent } from '../page/header/header.component';

@NgModule({
  declarations: [
    NavbarComponent,
    IntroComponent, 
    GalleryComponent, 
    ContentComponent, 
    TestimonialComponent, 
    FooterComponent, 
    ClientComponent, 
    PrincingComponent, 
    HeaderComponent, 
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