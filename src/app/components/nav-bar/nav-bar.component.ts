import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LockService, PumpService } from '../../services';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(
    public lockService: LockService,
    public pumpService: PumpService,
    public router: Router
  ) {

  }

  lock() {
    this.lockService.lock('');
  }

  unlock() {
    this.lockService.unlock('');
  }
}
