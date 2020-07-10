import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Simply a test', 'https://www.thechunkychef.com/wp-content/uploads/2019/09/One-Pot-Spaghetti-crop-680x816.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
