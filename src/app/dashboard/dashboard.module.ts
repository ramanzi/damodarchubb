import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';

import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
      CommonModule,
      routing,
      ReactiveFormsModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
  ]
})
export class DashboardModule { }
