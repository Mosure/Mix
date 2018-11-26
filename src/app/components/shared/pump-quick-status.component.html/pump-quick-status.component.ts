import { Component, Input } from '@angular/core';

import { Pump } from '../../../models';

@Component({
  selector: 'pump-quick-status',
  templateUrl: './pump-quick-status.component.html',
  styleUrls: ['./pump-quick-status.component.css']
})
export class PumpQuickStatusComponent {

    @Input('pump')
    set pump(pump: Pump) {
      this._pump = pump;
      this.remaining = this._pump.level / this._pump.volume * 100;
    }

    get pump(): Pump {
      return this._pump;
    }

    remaining: number;

    private _pump: Pump;

    constructor() {

    }
}
