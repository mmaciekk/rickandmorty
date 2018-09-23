import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import {
  Card, CardBody, CardImg, CardText, CardTitle, Button, Popover, PopoverHeader, PopoverBody,
} from 'reactstrap';

class RickMortyCard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({ popoverOpen: !prevState.popoverOpen }));
  }

  render() {
    const {
      image, name, gender, id, origin, location, status,
    } = this.props;
    const { popoverOpen } = this.state;
    return (
      <Card key={id}>
        <CardImg top width="100%" src={image} alt={`${name} image`} />
        <CardBody>
          <CardTitle>
            #
            {id}
            {' '}
            {name}
          </CardTitle>
          <CardText>
            <h5>
              Status:
              {` ${status}`}
            </h5>
          </CardText>
          <Button outline color="info" id={`pop${id}`} onClick={this.toggle}>
            Details
          </Button>
          <Popover
            placement="bottom"
            isOpen={popoverOpen}
            target={`pop${id}`}
            toggle={this.toggle}
          >
            <PopoverHeader>Details</PopoverHeader>
            <PopoverBody>
              <h5>
                Gender:
                {` ${gender}`}
              </h5>
              <h5>
                Origin:
                {` ${origin}`}
              </h5>
              <h5>
                Location:
                {` ${location}`}
              </h5>
            </PopoverBody>
          </Popover>
        </CardBody>
      </Card>
    );
  }
}

RickMortyCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default RickMortyCard;
