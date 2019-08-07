import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { ClientComponent } from './client/client.component';
import { PrincingComponent } from './princing/princing.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [HomepageComponent, IntroComponent, GalleryComponent, ContentComponent, TestimonialComponent, FooterComponent, ClientComponent, PrincingComponent, HeaderComponent, SocialComponent, NavigationComponent],
  imports: [
    CommonModule, SharedModule
  ]
})
export class PageModule { }
