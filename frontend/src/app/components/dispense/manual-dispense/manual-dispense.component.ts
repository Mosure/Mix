import { Component, Input } from '@angular/core';
import { Liquid } from 'src/app/models';

import { PumpService } from '../../../services';

@Component({
  selector: 'manual-dispense',
  templateUrl: './manual-dispense.component.html',
  styleUrls: ['./manual-dispense.component.css']
})
export class ManualDispenseComponent {
  @Input('liquid')
  liquid: Liquid;

  constructor(
    public pumpService: PumpService
  ) {

  }

  start_dispense() {

  }

  end_dispense() {
    this.pumpService.GetPumps().subscribe((pumps) => {
      
      this.pumpService.DispenseLiquid(pumps.find(p => p.liquid.name == this.liquid.name).id).subscribe(() => {});
    });
    
  }
}
