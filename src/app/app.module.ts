import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{DashboardModule} from './dashboard/dashboard.module';
import { FarmerModule } from './farmer/farmer.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    FarmerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

