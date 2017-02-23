import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RedirectService } from 'app/redirect.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [ RedirectService ],
  declarations: [AuthComponent],
})
export class AuthModule { }
