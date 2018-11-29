import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PumpService, LiquidService } from '../../../services';
import { Pump } from '../../../models';

@Component({
  selector: 'pump',
  templateUrl: './pump.component.html',
  styleUrls: ['./pump.component.css']
})
export class PumpComponent implements OnInit {
    pump: Pump

    constructor(
        public pumpService: PumpService,
        public liquidService: LiquidService,
        private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.pumpService.GetPumps().subscribe((result) => {
            this.pump = result.find(p => p.id === parseInt(params.get('id')));
        });
      });
    }

    isEnabled(pump: Pump) {
      if (pump.enabled) {
        return 'Enabled';
      } else {
        return 'Disabled';
      }
    }

    save(event: any) {
      this.pumpService.UpdatePump(this.pump);
    }

}
