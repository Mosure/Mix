import { Component, Input, EventEmitter } from '@angular/core';

import { Pump, Liquid } from '../../../models';

import { PumpService } from '../../../services';

@Component({
  selector: 'pump-quick-status',
  templateUrl: './pump-quick-status.component.html',
  styleUrls: ['./pump-quick-status.component.css']
})
export class PumpQuickStatusComponent {

    @Input('liquid')
    set liquid(liquid: Liquid) {
      this._liquid = liquid;
      this.GetCombinedPump(this._liquid);
    }

    get liquid(): Liquid {
      return this._liquid;
    }

    _changed: EventEmitter<any>;
    @Input()
    set changed(changed: EventEmitter<any>) {
      this._changed = changed;
      this._changed.subscribe(() => {
        this.GetCombinedPump(this._liquid);
      });
    }

    remaining: number;

    private _liquid: Liquid;

    constructor(private pumpService: PumpService) {

    }

    GetCombinedPump(liquid: Liquid) {
      this.pumpService.GetActivePumps(liquid.type).subscribe(
        pumps => {
          let newPump = new Pump();
          newPump.liquid = liquid;
          newPump.enabled = true;
          newPump.level = 0;
          newPump.volume = 0;

          for (const pump of pumps) {
              if (pump.liquid.name === liquid.name) {
                  newPump.hasCheckValve = newPump.hasCheckValve || pump.hasCheckValve;
                  newPump.level = newPump.level + pump.level;
                  newPump.volume = newPump.volume + pump.volume;
              }
          }

      this.remaining = newPump.level / newPump.volume * 100;
    });
  }
}
