import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { PortfolioModalComponent } from './portfolio-modal/portfolio-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortfolioComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    PortfolioModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    NgxPageScrollCoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
