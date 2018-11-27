import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { LockService, PumpService, ErrorHandlerService } from '../../services';
import { LockDialogComponent } from './lock-dialog/lock-dialog.component';
import { UnlockDialogComponent } from './unlock-dialog/unlock-dialog.component';

import { Pump } from '../../models';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  lowPumps: Pump[];

  constructor(
    public lockService: LockService,
    private pumpService: PumpService,
    public errorHandlerService: ErrorHandlerService,
    public router: Router,
    public dialog: MatDialog
  ) {
    const threshold = 0.1;

    this.pumpService.GetPumps().subscribe((result) => {
        this.lowPumps = result.filter(p => p.enabled && p.level / p.volume <= threshold);
    });
  }

  lock() {
    const dialogRef = this.dialog.open(LockDialogComponent, {
      width: '300px',
      position: {
        top: '118px'
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.lockService.lock(result);
      }
    });
  }

  unlock() {
    this.dialog.open(UnlockDialogComponent, {
      width: '300px',
      data: this.lockService
    })
  }
}
