import { Component } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

import { RecipeService, PumpService, LiquidService } from '../../../services';
import { Liquid, Recipe, Pump } from '../../../models';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  constructor(
    public recipeService: RecipeService,
    public pumpService: PumpService,
    public liquidService: LiquidService,
    public sanitization: DomSanitizer
  ) {
    
  }

  encodeURI(uri: string) {
    return encodeURI(uri);
  }

}
