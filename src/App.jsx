import { Component } from 'react';
import s from './App.module.scss';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    query: '',
    isModal: false,
    modalImg: null,
  };

  changeSearch = query => {
    this.setState({ query: query });
  };

  toggleModal = (modalImg = null) => {
    this.setState(prev => ({ isModal: !prev.isModal, modalImg }));
  };

  render() {
    const { query, isModal, modalImg } = this.state;
    return (
      <div className={s.App}>
        <Searchbar changeSearch={this.changeSearch} />
        <ImageGallery query={query} toggleModal={this.toggleModal} />

        {isModal && <Modal modalImg={modalImg} closeModal={this.toggleModal} />}
      </div>
    );
  }
}

export default App;
