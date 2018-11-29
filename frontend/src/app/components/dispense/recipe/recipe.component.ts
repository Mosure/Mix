import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models';

import { PumpService } from '../../../services';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  @Input('recipe')
  recipe: Recipe;

  strength: number;

  constructor(
    public pumpService: PumpService
  ) {
    this.strength = 1;
  }

  formatLabel(value: number | null) {
    if (value <= 0.25) {
      return 'No Alcohol';
    }
    else if (value <= 0.75) {
      return 'Weak';
    }
    else if (value <= 1.5) {
      return 'Medium';
    }
    else if (value <= 2.0) {
      return 'Strong';
    }

    return value;
  }

}
