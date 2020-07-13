import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommanDashboardComponent } from './comman-dashboard/comman-dashboard.component';
import { LoginComponent } from './login/login.component';
import { FarmerOrCustomerComponent } from './farmer-or-customer/farmer-or-customer.component';
import { CustregistrationComponent } from './custregistration/custregistration.component';
import { FarmerregistrationComponent } from './farmerregistration/farmerregistration.component';



@NgModule({
  declarations: [CommanDashboardComponent, LoginComponent, FarmerOrCustomerComponent, CustregistrationComponent, FarmerregistrationComponent],
  exports:[CommanDashboardComponent,LoginComponent,FarmerOrCustomerComponent,CustregistrationComponent, FarmerregistrationComponent],
  imports: [
    CommonModule,
   
  ]
  
})
export class DashboardModule { }
