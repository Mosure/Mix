import { Component } from '@angular/core';

import { PumpService } from '../../../services';
import { LiquidType } from '../../../models';

@Component({
  selector: 'syrups',
  templateUrl: './syrups.component.html',
  styleUrls: ['./syrups.component.css']
})
export class SyrupsComponent {
  syrup = <string>LiquidType.Syrup;

  constructor(public pumpService: PumpService) {
    
  }
}
