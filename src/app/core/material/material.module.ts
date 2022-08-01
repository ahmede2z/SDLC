import { NgModule } from '@angular/core';
import { MatCommonModule, MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const MaterialComponents = [
  MatCommonModule,
  MatNativeDateModule,
  MatRippleModule,
  MatSliderModule,
  MatButtonModule,
  MatTabsModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatDatepickerModule,
  MatInputModule,
  MaterialFileInputModule,
  MatDialogModule,
  MatSnackBarModule
]

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
