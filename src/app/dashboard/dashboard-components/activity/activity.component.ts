import { Component, OnInit } from '@angular/core';

interface activity {
  time: string;
  ringColor: string;
  message: string;
}

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
})
export class ActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activity: activity[] = [
    {
      time: "07:30",
      ringColor: "ring-success",
      message: "Breakfast: Greek yogurt with berries and honey",
    },
    {
      time: "10:00",
      ringColor: "ring-primary",
      message: "Morning Snack: Apple slices with almond butter",
    },
    {
      time: "12:30",
      ringColor: "ring-info",
      message: "Lunch: Grilled chicken salad with mixed greens and vinaigrette",
    },
    {
      time: "15:00",
      ringColor: "ring-warning",
      message: "Afternoon Snack: Carrot sticks with hummus",
    },
    {
      time: "18:30",
      ringColor: "ring-danger",
      message: "Dinner: Baked salmon with quinoa and steamed broccoli",
    },
  ];

}
