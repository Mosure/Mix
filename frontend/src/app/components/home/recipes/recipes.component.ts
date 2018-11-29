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
    private sanitization: DomSanitizer
  ) {
    
  }

  encodeBackground(uri: string) {
    return this.sanitization.bypassSecurityTrustStyle(`url(${uri})`);
  }

  encodeURI(uri: string) {
    console.log(encodeURI(uri));
    return encodeURI(uri);
  }

}
