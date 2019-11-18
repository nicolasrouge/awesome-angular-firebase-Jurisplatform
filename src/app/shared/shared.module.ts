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
import { MatChipsModule } from '@angular/material';

import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button'; 



import {MatStepperModule} from '@angular/material/stepper'; 
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
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatSelectModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatStepperModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    NavbarComponent,
    RouterModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatSelectModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule
  ],
})
export class SharedModule { }