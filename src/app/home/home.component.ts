import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  carouselItems = [
    {
      image: 'assets/images/Nutrition.jpg',
      title: 'Unlock your potential with good nutrition',
      subtitle: 'A FRESH APPROACH TO HEALTHY LIFE'
    },
    {
      image: 'assets/images/Meditation.jpg',
      title: 'Unlock your meditation with good nutrition',
      subtitle: 'A FRESH APPROACH TO HEALTHY LIFE'
    },
    // Add more carousel items as needed
  ];

}
