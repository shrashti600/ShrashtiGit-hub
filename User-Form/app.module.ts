import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { NetService } from '@angular/cli/bin/newproject/src/app/net.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { from } from '@angular/cli/bin/newproject/node_modules/rxjs';
import { EmpComponent } from './emp/emp.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { HomeComponent } from './home/home.component';
import { RedblackDirective } from './redblack.directive';
import { ShortPipe } from './short.pipe';
import { ManagerComponent } from './manager/manager.component';
import { AddcustomersComponent } from './addcustomers/addcustomers.component';
import { AllcustomersComponent } from './allcustomers/allcustomers.component';
import { ChequesComponent } from './cheques/cheques.component';
import { NetbankingComponent } from './netbanking/netbanking.component';
import { LeftpanelbankComponent } from './leftpanelbank/leftpanelbank.component';
import { CustomersComponent } from './customers/customers.component';
import { ViewchequeComponent } from './viewcheque/viewcheque.component';
import { ViewnetbankingComponent } from './viewnetbanking/viewnetbanking.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomernomineeComponent } from './customernominee/customernominee.component';
import { AddpayeeComponent } from './addpayee/addpayee.component';
import { AddchequeComponent } from './addcheque/addcheque.component';
import { AddnetbankingComponent } from './addnetbanking/addnetbanking.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpComponent,
    AdminComponent,
    LogoutComponent,
    MyaccountComponent,
    HomeComponent,
    RedblackDirective,
    ShortPipe,
    ManagerComponent,
    AddcustomersComponent,
    AllcustomersComponent,
    ChequesComponent,
    NetbankingComponent,
    LeftpanelbankComponent,
    CustomersComponent,
    ViewchequeComponent,
    ViewnetbankingComponent,
    CustomerdetailsComponent,
    CustomernomineeComponent,
    AddpayeeComponent,
    AddchequeComponent,
    AddnetbankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [NetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
