import {
  AlertModule,
  CardModule,
  CarouselModule,
  DropdownModule,
  FooterModule,
  GridModule,
  NavbarModule,
  NavModule,
} from '@coreui/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app-header.component';
import { PageCarouselComponent } from './page-carousel/page-carousel.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { AppFooterComponent } from './footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    PageCarouselComponent,
    WhoWeAreComponent,
    SocialMediaComponent,
    AppFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule,
    NavModule,
    NavbarModule,
    GridModule,
    BrowserAnimationsModule,
    DropdownModule,
    CarouselModule,
    CardModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    AppHeaderComponent,
    PageCarouselComponent,
    WhoWeAreComponent,
    SocialMediaComponent,
    AppFooterComponent,
  ],
})
export class AppModule {}
