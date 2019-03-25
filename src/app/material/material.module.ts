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
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressBarModule,
        MatSliderModule
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
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatProgressBarModule,
  MatSliderModule
]
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
