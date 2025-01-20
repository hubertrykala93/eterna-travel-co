import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogComponent } from './blog/blog.component';
import { PageTitleFormComponent } from './home/page-title-form/page-title-form.component';
import { DestinationComponent } from './destination/destination.component';
import { ToursComponent } from './tours/tours.component';
import { ToursSearchFormComponent } from './forms/tours/tours-search-form/tours-search-form.component';
import { ToursFilterFormComponent } from './forms/tours/tours-filter-form/tours-filter-form.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ToursListingComponent } from './tours/tours-listing/tours-listing.component';
import { ToursSortFormComponent } from './forms/tours/tours-sort-form/tours-sort-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    PageTitleComponent,
    AboutComponent,
    ContactUsComponent,
    BlogComponent,
    HomeComponent,
    PageTitleFormComponent,
    DestinationComponent,
    ToursComponent,
    ToursSearchFormComponent,
    ToursFilterFormComponent,
    PaginationComponent,
    ToursListingComponent,
    ToursSortFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
