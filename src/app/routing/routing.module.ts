import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioDetailComponent } from './../portfolio/portfolio-detail/portfolio-detail.component';
import { PortfolioComponent } from './../portfolio/portfolio.component';

const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'portfolio',  component: PortfolioComponent },
  { path: 'portfolioDetail', component: PortfolioDetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
