import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing';

@NgModule({
  imports: [
     CommonModule,
     LayoutRoutingModule,
    ],
    exports:[],
    declarations: [
    LayoutComponent,
    ],
  providers: []
 })
 export class LayoutModule {}
