import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { PageTitleFormComponent } from './forms/page-title/page-title-form/page-title-form.component';
import { DestinationComponent } from './destination/destination.component';
import { ToursComponent } from './tours/tours.component';
import { ToursSearchFormComponent } from './forms/tours/tours-search-form/tours-search-form.component';
import { ToursFilterFormComponent } from './forms/tours/tours-filter-form/tours-filter-form.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ToursSortFormComponent } from './forms/tours/tours-sort-form/tours-sort-form.component';
import { NewsletterFormComponent } from './forms/footer/newsletter-form/newsletter-form.component';
import { ContactInfoComponent } from './contact-us/contact-info/contact-info.component';
import { ContactUsFormComponent } from './forms/contact-us/contact-us-form/contact-us-form.component';
import { HomeToursComponent } from './home/tours/home-tours/home-tours.component';
import { HomeToursCardComponent } from './home/tours/home-tours-card/home-tours-card.component';
import { SliderPaginationComponent } from './others/slider-pagination/slider-pagination.component';
import { StatisticsOverviewComponent } from './others/statistics-overview/statistics-overview.component';
import { HomeHeaderSectionComponent } from './others/home-header-section/home-header-section.component';
import { SectionDividerComponent } from './others/section-divider/section-divider.component';
import { HomeDestinationsComponent } from './home/destinations/home-destinations/home-destinations.component';
import { HomeDestinationsCardComponent } from './home/destinations/home-destinations-card/home-destinations-card.component';
import { HomeWhyChooseUsComponent } from './home/why-choose-us/home-why-choose-us/home-why-choose-us.component';
import { WhyChooseUsImageSectionComponent } from './home/why-choose-us/why-choose-us-image-section/why-choose-us-image-section.component';
import { HomeBrowseByCategoryComponent } from './home/why-choose-us/home-browse-by-category/home-browse-by-category.component';
import { HomeBrowseByCategoryCardComponent } from './home/why-choose-us/home-browse-by-category-card/home-browse-by-category-card.component';
import { HomeTestimonialsComponent } from './home/testimonials/home-testimonials/home-testimonials.component';
import { TestimonialsImageSectionComponent } from './home/testimonials/testimonials-image-section/testimonials-image-section.component';
import { HomeTestimonialsQuoteComponent } from './home/testimonials/home-testimonials-quote/home-testimonials-quote.component';
import { HomeUpdatesComponent } from './home/updates/home-updates/home-updates.component';
import { HomeUpdatesCardComponent } from './home/updates/home-updates-card/home-updates-card.component';
import { HomeLogosComponent } from './home/logos/home-logos/home-logos.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { AboutFeaturesComponent } from './about/features/about-features/about-features.component';
import { AboutTeamComponent } from './about/team/about-team/about-team.component';
import { AboutTestimonialsComponent } from './about/testimonials/about-testimonials/about-testimonials.component';
import { ToursListingComponent } from './tours/tours-listing/tours-listing.component';
import { ToursHeaderComponent } from './tours/tours-header/tours-header.component';
import { ToursCardComponent } from './tours/tours-card/tours-card.component';
import { BlogCardComponent } from './blog/blog-card/blog-card.component';
import { BlogSearchFormComponent } from './blog/blog-search-form/blog-search-form.component';
import { BlogCategoriesComponent } from './blog/blog-categories/blog-categories.component';
import { BlogRecentPostsComponent } from './blog/blog-recent-posts/blog-recent-posts.component';
import { BlogTagsComponent } from './blog/blog-tags/blog-tags.component';
import { BlogGalleryComponent } from './blog/blog-gallery/blog-gallery.component';
import { NewsletterActivationComponent } from './forms/footer/newsletter-activation/newsletter-activation.component';
import { MessageComponent } from './others/message/message.component';

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
    ToursSortFormComponent,
    NewsletterFormComponent,
    ContactInfoComponent,
    ContactUsFormComponent,
    HomeToursComponent,
    HomeToursCardComponent,
    SliderPaginationComponent,
    StatisticsOverviewComponent,
    HomeHeaderSectionComponent,
    SectionDividerComponent,
    HomeDestinationsComponent,
    HomeDestinationsCardComponent,
    HomeWhyChooseUsComponent,
    WhyChooseUsImageSectionComponent,
    HomeBrowseByCategoryComponent,
    HomeBrowseByCategoryCardComponent,
    HomeTestimonialsComponent,
    TestimonialsImageSectionComponent,
    HomeTestimonialsQuoteComponent,
    HomeUpdatesComponent,
    HomeUpdatesCardComponent,
    HomeLogosComponent,
    AboutUsComponent,
    AboutFeaturesComponent,
    AboutTeamComponent,
    AboutTestimonialsComponent,
    ToursListingComponent,
    ToursHeaderComponent,
    ToursCardComponent,
    BlogCardComponent,
    BlogSearchFormComponent,
    BlogCategoriesComponent,
    BlogRecentPostsComponent,
    BlogTagsComponent,
    BlogGalleryComponent,
    NewsletterActivationComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
