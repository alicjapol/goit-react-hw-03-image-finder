import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
const apiKey = '41180761-f0899a94a2e54aea5b2403dd8';
const baseUrl = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    currentPage: 1,
    searchTerm: '',
    images: [],
  };



  render() {
    return(
      <div>
<Searchbar/>
      </div>
    )
    }}
    
    