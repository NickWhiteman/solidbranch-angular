import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ApiService } from 'src/api/api.service';
import { AppComponent } from './app.component';
import { IncomeComponent } from './income/income.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { LoansComponent } from './loans/loans.component';
import { InvestmentsComponent } from './investments/investments.component';

const routers = [
  {path: 'navigator?tab=0', component: IncomeComponent},
  {path: 'navigator?tab=1', component: OutcomeComponent},
  {path: 'navigator?tab=2', component: LoansComponent},
  {path: 'navigator?tab=3', component: InvestmentsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IncomeComponent,
    OutcomeComponent,
    LoansComponent,
    InvestmentsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
