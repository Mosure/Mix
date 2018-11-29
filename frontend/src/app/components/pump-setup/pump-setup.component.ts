import { Component } from '@angular/core';

import { PumpService, LiquidService } from '../../services';
import { LiquidType } from '../../models';

@Component({
  selector: 'pump-setup.',
  templateUrl: './pump-setup.component.html',
  styleUrls: ['./pump-setup.component.css']
})
export class PumpSetupComponent {
  constructor(
    public pumpService: PumpService,
    public liquidService: LiquidService
  ) {

  }
}
