import { Component } from 'react';
import { StyledLi, StyledItemImage } from './ImageGalleryItem.styled';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

class GalleyItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { tags, webformatURL, largeImageURL } = this.props;
    const { showModal } = this.state;
    return (
      <StyledLi>
        <StyledItemImage
          onClick={this.toggleModal}
          src={webformatURL}
          alt={tags}
        />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} width="750" />
          </Modal>
        )}
      </StyledLi>
    );
  }
}

GalleyItem.propTypes = {
  tags: PropTypes.string,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default GalleyItem;
