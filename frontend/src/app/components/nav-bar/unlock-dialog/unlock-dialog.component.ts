import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { LockService } from '../../../services/lock.service';

@Component({
  selector: 'unlock-dialog',
  templateUrl: './unlock-dialog.component.html',
  styleUrls: ['./unlock-dialog.component.css']
})
export class UnlockDialogComponent {
  password: string;

  constructor(public dialogRef: MatDialogRef<UnlockDialogComponent>, @Inject(MAT_DIALOG_DATA) public lockService: LockService) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  inputChange() {
    if (!this.lockService.unlock(this.password)) {
      this.dialogRef.close();
    }

    if (this.password.length >= 4) {
      this.password = '';
    }
  }
}
