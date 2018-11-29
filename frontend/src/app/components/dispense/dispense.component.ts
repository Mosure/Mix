import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PumpService, LiquidService, RecipeService } from '../../services';
import { Liquid, LiquidType, Recipe } from '../../models';

@Component({
  selector: 'dispense',
  templateUrl: './dispense.component.html',
  styleUrls: ['./dispense.component.css']
})
export class DispenseComponent implements OnInit {
  syrups = <string>LiquidType.Syrup;

  liquid: Liquid;
  recipe: Recipe;

  constructor(
    public pumpService: PumpService,
    public liquidService: LiquidService,
    public recipeService: RecipeService,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.liquidService.GetLiquids().subscribe((result) => {
        this.liquid = result.find(p => p.name === params.get('id'));
      });
      
      this.recipeService.GetRecipes().subscribe((result) => {
        this.recipe = result.find(p => p.name === params.get('id'));
      });
    });
  }
}
