import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styled from 'styled-components';

const ImageGalleryItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 16px;
  padding-bottom: 24px;
`;

const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryItemWrapper>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ImageGalleryItemWrapper>
  );
};

export default ImageGallery;
