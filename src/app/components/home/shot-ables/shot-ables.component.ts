import { Component } from '@angular/core';

import { PumpService } from '../../../services';

@Component({
  selector: 'shot-ables',
  templateUrl: './shot-ables.component.html',
  styleUrls: ['./shot-ables.component.css']
})
export class ShotAblesComponent {
  constructor(public pumpService: PumpService) {

  }
}
