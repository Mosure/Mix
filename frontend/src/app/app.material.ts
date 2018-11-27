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
    MatGridListModule

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
        MatGridListModule

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
        MatGridListModule

    ],
})
export class AppMaterialModule { }
