import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component {
  state = {
    topThree: [];
  }
  
  getGifs(){
    fetch()
  }
  
  render(){
    return (
       <div>
        <GifSearch fetchGifs={this.getGifs}/>
        <GifList gifs={this.state.topThree}/>
      </div>
      )
  }
}