import {FoodSuggestion} from "./food-suggestion";

export interface ApiResponse {
  branded: any[];
  common: FoodSuggestion[];
}
