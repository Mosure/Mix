import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { LockService, PumpService, ErrorHandlerService } from '../../services';
import { LockDialogComponent } from './lock-dialog/lock-dialog.component';
import { UnlockDialogComponent } from './unlock-dialog/unlock-dialog.component';

import { Pump } from '../../models';

import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(
    public lockService: LockService,
    private pumpService: PumpService,
    public errorHandlerService: ErrorHandlerService,
    public router: Router,
    public dialog: MatDialog
  ) {
    
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
