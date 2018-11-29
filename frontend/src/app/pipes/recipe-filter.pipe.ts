import { Pipe, PipeTransform } from '@angular/core';

import { PumpService, LiquidService } from '../services';

import { Recipe, Pump, Liquid } from '../models';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Pipe({name: 'recipefilter', pure: false})
export class RecipeFilterPipe implements PipeTransform {

  constructor(
    private pumpService: PumpService,
  ){ }


  transform(recipes: Recipe[]): Observable<Recipe[]> {
    if (!recipes) {
      return new Observable<Recipe[]>();
    }

    return this.pumpService.GetActivePumps().pipe(
      map(
        pumps => {
          return recipes.filter(r => {
            let canMake = true;

            for (const component of r.components) {
              let needed = component.milliliters;
              for (const pump of pumps) {
                if (pump.liquid.name === component.liquid.name) {
                  needed -= Math.min(pump.level, needed);
                }
              }

              if (needed != 0) {
                canMake = false;
                break;
              }
            }

            return canMake;
          });
        }
      )
    )
  }

}
