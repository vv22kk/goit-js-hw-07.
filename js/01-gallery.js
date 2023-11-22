import { galleryItems } from './gallery-items.js';
// Change code below this line

// ---create-galery
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

//create-modal-Original-Size (basicLightbox)
function GaleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src = "${event.target.dataset.source}" alt='${event.target.alt}'>`,
  );
  instance.show();

  // ---close-modal-ESC
  const closeModal = e => {
    if (e.key === 'Escape') {
      instance.close();
    }
    // console.log(123);
    document.removeEventListener('keydown', closeModal);
  };
  document.addEventListener('keydown', closeModal);
}
