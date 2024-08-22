import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ApiResponse} from "./api-response";
import {Meal} from "./meal";

@Injectable({
  providedIn: 'root'
})
export class NutritionService {

  constructor(private http:HttpClient) { }

  /*
  getSuggestions(query: string): Observable<string[]> {
    return this.http.get<string[]>(`/api/suggestions?query=${query}`);
  }
   */

  calculateCalories(food: string):Observable<any>{
    console.log("\n service food : "+food);
    return this.http.get<any>(`http://localhost:8080/api/caloriesCaluculator/${food}`);
  }
  suggestion(name:string):Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`http://localhost:8080/api/searchIngredient/${name}`)
  }
  saveMeal(name:string,category:string,ingredients:Meal[]){
    //send request to backend
  }
}
