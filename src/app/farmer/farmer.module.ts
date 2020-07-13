import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmersOptionComponent } from './farmers-option/farmers-option.component';



@NgModule({
  declarations: [FarmersOptionComponent],
  exports:[FarmersOptionComponent],
  imports: [
    CommonModule
  ]
})
export class FarmerModule { }
