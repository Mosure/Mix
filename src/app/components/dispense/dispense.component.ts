import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PumpService } from '../../services';
import { LiquidType } from '../../models';

@Component({
  selector: 'dispense',
  templateUrl: './dispense.component.html',
  styleUrls: ['./dispense.component.css']
})
export class DispenseComponent implements OnInit {
  syrups = <string>LiquidType.Syrup;

  liquidName: string;

  constructor(
    public pumpService: PumpService,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.liquidName = params.get('id');
    });
  }
}
