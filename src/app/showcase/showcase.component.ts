import { Component } from '@angular/core';

interface Image {
  src: string;
  title: string;
  description: string;
  alt: string;
}

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent {
  images: Image[] = [
    {
      src: '../../assets/images/01.jpg',
      alt: 'Image description',
      title: 'First Image',
      description: 'This is the first image description.',
    },
    {
      src: '../../assets/images/02.jpg',
      alt: 'Image description',
      title: 'Second Image',
      description: 'This is the second image description.',
    },
    {
      src: '../../assets/images/03.jpg',
      alt: 'Image description',
      title: 'Second Image',
      description: 'This is the second image description.',
    },
    {
      src: '../../assets/images/04.jpg',
      alt: 'Image description',
      title: 'Second Image',
      description: 'This is the second image description.',
    },
    {
      src: '../../assets/images/05.jpg',
      alt: 'Image description',
      title: 'Second Image',
      description: 'This is the second image description.',
    },
    {
      src: '../../assets/images/06.jpg',
      alt: 'Image description',
      title: 'Second Image',
      description: 'This is the second image description.',
    },
    {
      src: '../../assets/images/07.jpg',
      alt: 'Image description',
      title: 'Second Image',
      description: 'This is the second image description.',
    },
    {
      src: '../../assets/images/08.jpg',
      alt: 'Image description',
      title: 'Second Image',
      description: 'This is the second image description.',
    },
    {
      src: '../../assets/images/09.jpg',
      alt: 'Image description',
      title: 'Second Image',
      description: 'This is the second image description.',
    },
    {
      src: '../../assets/images/10.jpg',
      alt: 'Image description',
      title: 'Second Image',
      description: 'This is the second image description.',
    },
    {
      src: '../../assets/images/11.jpg',
      alt: 'Image description',
      title: 'Second Image',
      description: 'This is the second image description.',
    },
    {
      src: '../../assets/images/12.jpg',
      alt: 'Image description',
      title: 'Second Image',
      description: 'This is the second image description.',
    },
  ];
  currentImage: Image = this.images[0];

  setCurrentImage(image: Image): void {
    this.currentImage = image;
  }

  navigate(direction: 'prev' | 'next'): void {
    const index = this.images.indexOf(this.currentImage);
    if (direction === 'prev') {
      this.currentImage =
        this.images[(index - 1 + this.images.length) % this.images.length];
    } else {
      this.currentImage = this.images[(index + 1) % this.images.length];
    }
  }
}
