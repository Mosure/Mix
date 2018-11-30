import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    
} from '@angular/material';

@NgModule({
  imports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatBadgeModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatGridListModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSelectModule,

    ],
  exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatBadgeModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatGridListModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSelectModule,

    ],
})
export class AppMaterialModule { }
