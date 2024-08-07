import { Component, OnInit } from '@angular/core';

interface Card {
  image: string;
  title: string;
  text: string;
  btn: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  cards: Card[] = [
    {
      image: 'assets/images/Exercise.jpg',
      title: 'Gym Workouts',
      text: 'Enhance your strength and stamina with our guided gym workouts.',
      btn: 'warn',
    },
    {
      image: 'assets/images/Nutrition.jpg',
      title: 'Healthy Nutrition',
      text: 'Discover the best nutritional advice to keep your body fit and healthy.',
      btn: 'warn',
    },
    {
      image: 'assets/images/Meditation.jpg',
      title: 'Meditation Practices',
      text: 'Relax and rejuvenate with our simple and effective meditation practices.',
      btn: 'warn',
    },
  ];
}
