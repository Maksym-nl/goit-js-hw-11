import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = '36713160-b8ce690bed289b735a8a8bdcb';
const URL = 'https://pixabay.com/api/';

export async function fetchImages(options) {
  let parameters = new URLSearchParams(options);
  const images = await axios.get(`${URL}?key=${API_KEY}&${parameters}`);

  if (parameters.page === 1 && images.data.totalHits != 0) {
    Notiflix.Notify.success(`Hooray! We found ${totalHits} images!`);
  }

  return images.data;
}