// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

const gallery = document.querySelector(".gallery");

for (const item of galleryItems) {
  gallery.innerHTML += `
      <div class="gallery__item">
          <a class="gallery__link" href="${item.original}">
              <img class="gallery__image" src="${item.preview}" alt="${item.description}">
          </a>
      </div>
  `;
}

var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

console.log(galleryItems);
