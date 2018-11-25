import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { LockService, PumpService } from '../../services';
import { LockDialogComponent } from './lock-dialog/lock-dialog.component';
import { UnlockDialogComponent } from './unlock-dialog/unlock-dialog.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(
    public lockService: LockService,
    public pumpService: PumpService,
    public router: Router,
    public dialog: MatDialog
  ) {

  }

  lock() {
    const dialogRef = this.dialog.open(LockDialogComponent, {
      width: '300px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.lockService.lock(result);
      }
    });
  }

  unlock() {
    const dialogRef = this.dialog.open(UnlockDialogComponent, {
      width: '300px',
      data: this.lockService
    })
  }
}
