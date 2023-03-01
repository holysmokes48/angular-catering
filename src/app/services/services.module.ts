import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';


import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild([{ path: '', component: ServicesComponent }]),
    SharedModule
  ]
})
export class ServicesModule {}
