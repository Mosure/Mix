import { Component } from '@angular/core';

import { PumpService } from '../../../services';
import { LiquidType } from '../../../models';

@Component({
  selector: 'mixers',
  templateUrl: './mixers.component.html',
  styleUrls: ['./mixers.component.css']
})
export class MixersComponent {
  mixer = <string>LiquidType.Mixer;

  constructor(public pumpService: PumpService) {
    
  }
}
