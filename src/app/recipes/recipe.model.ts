import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];
  public chefPath: string;
  public rating: string;
  public diet: string

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[], public chef: string, public rate: string, public diets: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    this.chefPath = chef;
    this.rating = rate;
    this.diet = diets;
  }
}
