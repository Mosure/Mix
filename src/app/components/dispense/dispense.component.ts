import { Component } from '@angular/core';

import { PumpService } from '../../services';
import { LiquidType } from '../../models';

@Component({
  selector: 'dispense',
  templateUrl: './dispense.component.html',
  styleUrls: ['./dispense.component.css']
})
export class DispenseComponent {
  syrups = <string>LiquidType.Syrup;

  constructor(public pumpService: PumpService) {
    
  }
}
