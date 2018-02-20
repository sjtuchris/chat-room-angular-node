import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatMenuModule,
  MatButtonModule, 
  MatCardModule,
  MatDialog,
  MatDialogModule,
  MatIconModule, 
  MatFormFieldModule,
  MatInputModule, 
  MatListModule,
  MatSidenavModule, 
  MatToolbarModule, 
  MatIcon,
  MatExpansionModule,
  MatGridListModule,
  MatTabsModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatMenuModule,
    CommonModule,
    MatButtonModule, 
    MatCardModule,
    MatDialogModule,
    MatIconModule, 
    MatFormFieldModule,
    MatInputModule, 
    MatListModule,
    MatSidenavModule, 
    MatToolbarModule,
    MatExpansionModule, 
    MatGridListModule,
    MatTabsModule,
  ],
  exports: [
    MatMenuModule,
    MatButtonModule, 
    MatCardModule,
    MatDialogModule,
    MatIconModule, 
    MatFormFieldModule,
    MatInputModule, 
    MatListModule,
    MatSidenavModule, 
    MatToolbarModule, 
    MatExpansionModule,
    MatGridListModule,
    MatTabsModule,
  ],
  declarations: [],
  providers: [
    MatDialog
  ]
})

export class MaterialModule { }