import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent} from './page/intro/intro.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { ContentComponent } from './page/content/content.component';
import { TestimonialComponent } from './page/testimonial/testimonial.component';
import { ClientComponent } from './page/client/client.component';
import { PrincingComponent } from './page/princing/princing.component';
import { HomeComponent } from './page/home/home.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const routes: Routes = [
  { path: '',   redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component:IntroComponent},
  { path: 'Gallery', component: GalleryComponent},
  { path: 'Services', component: ContentComponent},
  { path: 'Testimonials', component: TestimonialComponent},
  { path: 'Client', component: ClientComponent},
  { path: 'Pricing', component: PrincingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AngularFireDatabaseModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
