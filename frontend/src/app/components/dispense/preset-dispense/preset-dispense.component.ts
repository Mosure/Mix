import { Component, Input } from '@angular/core';
import { Liquid } from 'src/app/models';

import { PumpService } from '../../../services';

@Component({
  selector: 'preset-dispense',
  templateUrl: './preset-dispense.component.html',
  styleUrls: ['./preset-dispense.component.css']
})
export class PresetDispenseComponent {
  @Input('liquid')
  liquid: Liquid;

  constructor(
    public pumpService: PumpService
  ) {

  }
}
