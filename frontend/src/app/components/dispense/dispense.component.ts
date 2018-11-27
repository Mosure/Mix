import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PumpService, LiquidService } from '../../services';
import { Liquid, LiquidType } from '../../models';

@Component({
  selector: 'dispense',
  templateUrl: './dispense.component.html',
  styleUrls: ['./dispense.component.css']
})
export class DispenseComponent implements OnInit {
  syrups = <string>LiquidType.Syrup;

  liquid: Liquid;

  constructor(
    public pumpService: PumpService,
    public liquidService: LiquidService,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.liquidService.GetLiquid(params.get('id')).subscribe(liquid => {
        this.liquid = liquid;
      });
    });
  }
}
