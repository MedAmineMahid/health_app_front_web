import { Component, OnInit } from '@angular/core';
/*
export interface PeriodicElement {
  id: number;
  meal: string;
  time: string;
  calories: number;
  nutrients: string;
  badge: string;
}
 */
export interface PeriodicElement {
  id: number;
  meal: string;
  time: string;
  calories: number;
  nutrients: string;
  badge: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, meal: 'Greek yogurt with berries and honey', time: '07:30 AM', calories: 200, nutrients: 'Protein, Carbs, Fiber', badge: 'badge-success' },
  { id: 2, meal: 'Apple slices with almond butter', time: '10:00 AM', calories: 150, nutrients: 'Fiber, Healthy Fats', badge: 'badge-primary' },
  { id: 3, meal: 'Grilled chicken salad with mixed greens and vinaigrette', time: '12:30 PM', calories: 350, nutrients: 'Protein, Vitamins, Healthy Fats', badge: 'badge-info' },
  { id: 4, meal: 'Carrot sticks with hummus', time: '03:00 PM', calories: 100, nutrients: 'Fiber, Protein', badge: 'badge-warning' },
  { id: 5, meal: 'Baked salmon with quinoa and steamed broccoli', time: '06:30 PM', calories: 400, nutrients: 'Protein, Omega-3, Fiber', badge: 'badge-danger' },
];


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  displayedcolumns: string[] = ['id', 'meal', 'time', 'calories', 'nutrients', 'badge'];  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
