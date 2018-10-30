import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      topThree: [];
    }
  }

  getGifs = event => {
    event.preventDefault
    let query =
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
  }

  render(){
    return (
       <div>
        <GifSearch submit={this.getGifs}/>
        <GifList gifs={this.state.topThree}/>
      </div>
      )
  }
}
