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

    ],
})
export class AppMaterialModule { }
