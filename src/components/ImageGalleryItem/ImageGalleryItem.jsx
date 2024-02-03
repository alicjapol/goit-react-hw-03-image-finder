

export default function ImageGalleryItem({ image }) {
  return (
    <li className="GalleryItem" key={image.id}>
      <img src={image.webformatURL} alt={image.id} />
    </li>
  );
}
