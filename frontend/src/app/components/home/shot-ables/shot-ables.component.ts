import { Component } from '@angular/core';

import { PumpService, LiquidService } from '../../../services';
import { LiquidType } from '../../../models';

@Component({
  selector: 'shot-ables',
  templateUrl: './shot-ables.component.html',
  styleUrls: ['./shot-ables.component.css']
})
export class ShotAblesComponent {
  shotable = <string>LiquidType.Shotable;

  constructor(
    public pumpService: PumpService,
    public liquidService: LiquidService
  ) {
    
  }
}
