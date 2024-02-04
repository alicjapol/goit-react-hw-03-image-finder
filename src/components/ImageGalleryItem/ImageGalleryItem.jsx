export default function ImageGalleryItem({ image, onClick }) {
  return (
    <li
      className="GalleryItem"
      key={image.id}
      onClick={() => onClick(image.largeImageURL)}
    >
      <img src={image.webformatURL} alt={image.id} />
    </li>
  );
}
