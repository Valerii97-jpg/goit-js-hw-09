import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.grid-container a', {
  captionsData: 'alt',
  captionDelay: 250,
});
