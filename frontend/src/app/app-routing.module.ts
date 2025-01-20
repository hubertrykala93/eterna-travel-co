import { ToursComponent } from './tours/tours.component';
import { DestinationComponent } from './destination/destination.component';
import { HomeComponent } from './home/home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'destination', component: DestinationComponent},
  { path: 'tours', component: ToursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
