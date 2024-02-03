export default function Modal({ imageURL, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <img src={imageURL} alt="Full Size" />
      </div>
    </div>
  );
}
