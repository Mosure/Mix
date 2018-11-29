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

    ],
})
export class AppMaterialModule { }
