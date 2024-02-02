// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryTemplate = (item) => `
  <div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" data-src="${item.original}" alt="${item.description}">
    </a>
  </div>
`;

for (const item of galleryItems) {
  gallery.innerHTML += galleryTemplate(item);
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
