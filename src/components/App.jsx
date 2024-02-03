import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import styled from 'styled-components';
import css from '../../src/index';

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;
const SearchbarWrapper = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
const ImageGalleryWrapper = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

const apiKey = '41180761-f0899a94a2e54aea5b2403dd8';

export function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const newUrl = `https://pixabay.com/api/?q=${searchTerm}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

  const fetchPics = async () => {
    try {
      const res = await axios.get(newUrl);
      setImages([...images, ...res.data.hits]);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleInputChange = e => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
    setImages([]);
  };

  useEffect(() => {
    fetchPics();
  }, [searchTerm, currentPage]);

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const openModal = imageURL => {
    setSelectedImage(imageURL);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
<div>
      <AppWrapper>
        <SearchbarWrapper>
          <Searchbar onSubmit={handleInputChange} />
        </SearchbarWrapper>
        <ImageGalleryWrapper>
          <ImageGallery images={images} onImageClick={openModal} />
        </ImageGalleryWrapper>
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={loadMore}>Load More</Button>
        )}
        {selectedImage && (
          <Modal imageURL={selectedImage} onClose={closeModal} />
        )}
      </AppWrapper>
    </div>
  );
}
