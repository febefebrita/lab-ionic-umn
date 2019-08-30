import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://img.jakpost.net/c/2017/01/31/2017_01_31_20436_1485827331._large.jpg',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Ketupat',
      imageUrl: 'http://resepcaramemasak.info/wp-content/uploads/2014/12/resep-ketupat-sayur.jpg',
      ingredients: ['Lontong', 'Tahu', 'Santan', 'Tauge']
    },
    {
      id: 'r3',
      title: 'Pizza Margerita',
      imageUrl: 'https://img.taste.com.au/4VXyMX9P/taste/2016/11/pizza-margherita-39581-1.jpeg',
      ingredients: ['Keju', 'Tomat', 'Daging']
    }
  ]
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }
  getRecipe(recipeId: string){
    return {...this.recipes.find(recipes=>recipes.id === recipeId)};
  }
  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipes => {
      return recipes.id !== recipeId;
    });
  }
}
