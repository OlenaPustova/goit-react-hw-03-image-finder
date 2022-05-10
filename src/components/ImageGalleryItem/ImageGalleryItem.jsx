import s from './ImageGalleryItem.module.scss';
import PropTypes from 'prop-types';

//  id, webformatURL, largeImageURL;

function ImageGalleryItem({ img, openModal }) {
  const { webformatURL, largeImageURL } = img;
  const handleClick = modalImg => {
    openModal(modalImg);
  };
  // console.log(largeImageURL);
  return (
    <li className={s.item} onClick={() => handleClick(largeImageURL)}>
      <img src={webformatURL} alt="" className={s.image} />
    </li>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  img: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};
