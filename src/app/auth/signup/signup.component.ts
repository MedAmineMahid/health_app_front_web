import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  url="home"
constructor() {}

  ngOnInit(): void {
    const sign_in_btn = document.querySelector("#sign-in-btn") as HTMLElement;
    const sign_up_btn = document.querySelector("#sign-up-btn") as HTMLElement;
    const container = document.querySelector(".container") as HTMLElement;

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
      this.animateBackground();
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }

  animateBackground() {
    const container = document.querySelector(".container") as HTMLElement;
    const circles = 5;

    for (let i = 0; i < circles; i++) {
      const circle = document.createElement('div');
      circle.classList.add('animated-circle');
      circle.style.setProperty('--delay', `${i * 0.2}s`);
      container.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, 2000);
    }
  }
}
