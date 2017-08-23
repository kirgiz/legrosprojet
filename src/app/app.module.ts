import { PortfolioService } from './portfolio.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CdkTableModule } from '@angular/cdk';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ClientComponent } from './client/client.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { PortfolioDetailComponent } from './portfolio/portfolio-detail/portfolio-detail.component';
import { MdButtonModule, MdMenuModule, MdCardModule, MdToolbarModule,
   MdIconModule, MdInputModule, MdTableModule, MaterialModule, MdPaginator } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablePaginationExampleComponent } from './table-pagination-example/table-pagination-example.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ClientComponent,
    ClientDetailComponent,
    PortfolioDetailComponent,
    TablePaginationExampleComponent//, MdPaginator
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    CdkTableModule,
    MdTableModule,
    MaterialModule,
    FormsModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
