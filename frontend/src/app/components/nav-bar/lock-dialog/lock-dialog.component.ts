import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'lock-dialog',
  templateUrl: './lock-dialog.component.html',
  styleUrls: ['./lock-dialog.component.css']
})
export class LockDialogComponent {
  password: string;

  constructor(public dialogRef: MatDialogRef<LockDialogComponent>) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  inputChange() {
    if (this.password.length >= 4) {
      this.dialogRef.close(this.password);
    }
  }
}
