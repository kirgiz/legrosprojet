import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ClientComponent } from './client/client.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { PortfolioDetailComponent } from './portfolio/portfolio-detail/portfolio-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ClientComponent,
    ClientDetailComponent,
    PortfolioDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
