import { Component, Input, EventEmitter } from '@angular/core';

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

    _changed: EventEmitter<any>;
    @Input()
    set changed(changed: EventEmitter<any>) {
      this._changed = changed;
      this._changed.subscribe(() => {
        this.remaining = this._pump.level / this._pump.volume * 100;
      });
    }

    remaining: number;

    private _pump: Pump;

    constructor() {

    }
}
