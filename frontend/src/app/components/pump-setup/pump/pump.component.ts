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
    liquidName: string;

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
            this.liquidName = this.pump.liquid.name;
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
      this.liquidService.GetLiquids().subscribe(liquids => {
        this.pump.liquid = liquids.find(l => l.name === this.liquidName);
        this.pumpService.UpdatePump(this.pump);
      });
    }

}
