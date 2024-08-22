import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import {NutritionService} from "../nutrition.service";
import {Meal} from "../meal";
import {HttpClient} from "@angular/common/http";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-meal-log',
  templateUrl: './meal-log.component.html',
  styleUrls: ['./meal-log.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class MealLogComponent {
  foodQuery:string='';
  searchTerm: string = '';
  searchResults: any[] = [];
  quantity: number = 0;
  unit: string = 'g';
  mealCategories: string[] = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
  selectedCategory: string = '';
  suggestions: any[] = [];
  newMeal: Meal[] = [
    { name: '', quantity: 0, measure: '', calories: 0 }
  ];
  mealLenght:number=3;
  totalcalories: number=0;
  mealName:string='';


  constructor(private http:HttpClient,private serviceNutrition : NutritionService) {}

  ngOnInit() {}

  searchFood(search:string) {
    if (search.trim()) {
      this.serviceNutrition.suggestion(search).subscribe(response => {
        // You can adjust this depending on the actual API response structure
        this.suggestions = response.common || [];
        //console.log("\n suggestions"+this.suggestions);
      });
    } else {
      this.suggestions = [];
    }
  }


  selectSuggestion(suggestion: any,index:number) {
    //console.log(`Selected food: ${suggestion.food_name}`);
    //console.log(`Calories: ${suggestion.nf_calories}`);
    //console.log(`index : ${index}`);
    this.newMeal[index].name=suggestion.food_name;
    //console.log(`affected food : ${this.newMeal[index].ingredient}`)
    this.searchTerm=suggestion.food_name;
    // Implement further actions after selection, e.g., display the calories
    this.suggestions = []; // Clear suggestions after selection
  }

  addCustomFood() {
    // Implement custom food addition logic here
   // console.log('Adding custom food');
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  logMeal() {
    // Implement meal logging logic here
    //console.log('Logging meal');
  }

  calculatecalories() {
    for (let i = 0; i < this.newMeal.length; i++) {
      this.foodQuery = this.foodQuery +" \n "+this.newMeal[i].measure+" "+this.newMeal[i].quantity+" "+this.newMeal[i].name;
    }
    //console.log(`food query : ${this.foodQuery}`)
    this.serviceNutrition.calculateCalories(this.foodQuery).subscribe(response => {
     //
      // console.log(response);
      if (response.foods && response.foods.length > 0) {
        for (let i = 0; i < response.foods.length; i++) {
          const food = response.foods[i];
          this.newMeal[i].calories = food.nf_calories;
          this.totalcalories +=this.newMeal[i].calories;
        }
        const food = response.foods[0]; // Assuming you want to extract the first item


        //const photoUrl = food.photo ? food.photo.highres : null;
        for (let i = 0; i < this.newMeal.length; i++) {
         // console.log("food : "+this.newMeal[i].ingredient+" calorie : "+this.newMeal[i].calorie+"\n ");
        }
      }

    });
//console.log(`total calories : ${this.totalcalories}`);
  }

  addIngredient() {
    this.newMeal.push({ name: '', quantity: 0, measure: '', calories: 0 });
  }

  save(){
    /*
    console.log(`
     meal name : ${this.mealName}
     \n categorie : ${this.selectedCategory}
     \n ingredients : `);
        for (let i = 0; i < this.newMeal.length; i++) {
          console.log(` food name : ${this.newMeal[i].ingredient}  , quantity : ${this.newMeal[i].quantity} , measure : ${this.newMeal[i].unit} , calorie : ${this.newMeal[i].calorie}`);
        }

     */
    const meal = {
      mealName: this.mealName,
      mealCategories: this.selectedCategory,
      date: new Date(),
      ingredients: this.newMeal
    };

    this.http.post("http://localhost:8080/api/meals/save", meal).subscribe(response => {
      console.log('Meal saved:', response);
    });
  }
}
/*
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-meal-log',
  templateUrl: './meal-log.component.html',
  styleUrls: ['./meal-log.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class MealLogComponent implements OnInit {
  // Component logic here
}
 */
