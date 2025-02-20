import { AccountActivationComponent } from './authentication/account-activation/account-activation.component';
import { AuthenticateComponent } from './authentication/authenticate/authenticate.component';
import { ArticleDetailsComponent } from './blog/article-details/article-details.component';
import { ArticlesByTagComponent } from './blog/articles-by-tag/articles-by-tag.component';
import { ArticlesByCategoryComponent } from './blog/articles-by-category/articles-by-category.component';
import { NewsletterActivationComponent } from './forms/footer/newsletter-activation/newsletter-activation.component';
import { HomeComponent } from './home/home.component';
import { ToursComponent } from './tours/tours.component';
import { DestinationComponent } from './destination/destination.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'newsletter-activation', component: NewsletterActivationComponent},
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'authenticate/:mode', component: AuthenticateComponent},
  { path: 'account-activate', component: AccountActivationComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'blog/category/:slug', component: ArticlesByCategoryComponent},
  { path: 'blog/tag/:slug', component: ArticlesByTagComponent},
  { path: 'blog/:categorySlug/:articleSlug', component: ArticleDetailsComponent},
  { path: 'destination', component: DestinationComponent},
  { path: 'tours', component: ToursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
