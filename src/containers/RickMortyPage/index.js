import React, { Component } from 'react';
import axios from 'axios';
import Content from '../Content';
import Header from '../../components/Header';

class RickMortyPage extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters() {
    const charactersLink = 'https://rickandmortyapi.com/api/character/';

    axios.get(charactersLink)
      .then((response) => {
        this.setState({
          characters: response.data.results,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { characters } = this.state;
    return (
      <div>
        <Header />
        <Content characters={characters} />
      </div>
    );
  }
}

export default RickMortyPage;
