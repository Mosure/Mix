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

    ],
})
export class AppMaterialModule { }
