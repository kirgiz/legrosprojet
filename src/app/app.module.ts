import { PortfolioService } from './portfolio.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ClientComponent } from './client/client.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { PortfolioDetailComponent } from './portfolio/portfolio-detail/portfolio-detail.component';
import { MdButtonModule, MdMenuModule, MdCardModule, MdToolbarModule,
   MdIconModule, MdInputModule, MdPaginator} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ClientComponent,
    ClientDetailComponent,
    PortfolioDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule //,
    //MdPaginator
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
