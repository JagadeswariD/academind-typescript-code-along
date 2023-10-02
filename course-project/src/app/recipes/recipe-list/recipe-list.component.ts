import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simply test',
      'https://th.bing.com/th/id/R.df49d67ffa3cc6db997b4a0ce81f7686?rik=dk4cmweiwQA0Fw&pid=ImgRaw&r=0'
    ),
  ];
}
