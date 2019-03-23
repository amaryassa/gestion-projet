import { NgModule } from '@angular/core';
import {MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatGridListModule,
        MatDialogModule,
        MatSelectModule
      } from '@angular/material';


const MaterialComponents =[
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatGridListModule,
  MatDialogModule,
  MatSelectModule
]
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
