import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', GaleryClick);

function createGalerry(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}" alt="${description}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`,
    )
    .join('');
}
galleryEl.insertAdjacentHTML('beforeend', createGalerry(galleryItems));

function GaleryClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const targetClickImageOriginalSize = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src = "${targetClickImageOriginalSize}">`,
  );
  instance.show();

  const closeModal = e => {
    if (e.key === 'Escape') {
      instance.close();
    }
  };
  document.addEventListener('keydown', closeModal);
}
