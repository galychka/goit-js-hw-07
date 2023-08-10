import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

function creatGalleryEl(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="I${description}"/>
        </a>
      </li>`).join("");
}
galleryContainer.insertAdjacentHTML("beforeend", creatGalleryEl(galleryItems));


    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
    });


galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  const linkGalleryEl = document.querySelector(".gallery__link");
  if (evt.target === linkGalleryEl) {
    evt.target.preventDefault();
      return;
      
  }
  const oringinalImgSrc = evt.target.dataset.source;
    
}

