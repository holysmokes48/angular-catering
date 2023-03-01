import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClienteleComponent } from './clientele.component';


import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild([{ path: '', component: ClienteleComponent }]),
    SharedModule
  ]
})
export class ClienteleModule {}
