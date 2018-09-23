import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Container, Row,
} from 'reactstrap';

import RickMortyCard from '../../components/RickMortyCard';
import './index.css';

class Content extends Component {
  displayCharacters() {
    const { characters } = this.props;
    const charactersFours = characters
      .map((x, i) => (i % 4 === 0 ? characters.slice(i, i + 4) : null))
      .filter(x => x != null);

    return (
      <Container>
        {charactersFours.map((four, index) => (
          /* Because it is an array of arrays */
          /* eslint-disable-next-line */
          <Row key={index}>
            {four.map(character => (
              <Col key={character.id} xs={12} sm={12} md={3} lg={3}>
                <RickMortyCard
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  gender={character.gender}
                  image={character.image}
                  origin={character.origin.name}
                  status={character.status}
                  location={character.location.name}
                />
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    );
  }


  render() {
    return (
      <div>
        {this.displayCharacters()}
      </div>
    );
  }
}

Content.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
};

Content.defaultProps = {
  characters: [{}],
};

export default Content;
