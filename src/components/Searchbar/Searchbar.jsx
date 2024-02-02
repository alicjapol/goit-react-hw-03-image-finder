import React, { Component } from 'react';
import axios from 'axios';

const apiKey = '41180761-f0899a94a2e54aea5b2403dd8';
const baseUrl = 'https://pixabay.com/api/';

export default class Searchbar extends Component {
  state = {
    searchTerm: '',
  };
  handleSearch = () => {
    const { currentPage, searchTerm } = this.state;
    const newUrl = `${baseUrl}?${searchParams.toString()}`;

    const searchParams = new URLSearchParams({
      key: apiKey,
      q: searchTerm,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currentPage,
      per_page: 12,
    });
  }
render(){
    return(
        <div>
        <header className='searchbar'>
  <form className='form'>
    <button type="submit" class="button">
      <span className='button-label'>Search</span>
    </button>

    <input
      className='input'
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
</div>
    )
}

}