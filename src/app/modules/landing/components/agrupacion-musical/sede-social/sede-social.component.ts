import { Component } from '@angular/core';

@Component({
  selector: 'app-sede-social',
  templateUrl: './sede-social.component.html',
  styleUrls: ['./sede-social.component.scss']
})
export class SedeSocialComponent {

  currentIndex = 0;

  slides = [
    'assets/img/carrusel/img1.jpg',
    'assets/img/carrusel/img2.jpg',
    'assets/img/carrusel/img3.jpg'
  ];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateTransform();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateTransform();
  }

  updateTransform() {
    const track = document.querySelector<HTMLElement>('.carousel-track');
    if (track) {
      track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }
  }
}
