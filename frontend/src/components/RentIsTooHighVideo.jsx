import React, { Component }from 'react';
import YouTube from 'react-youtube';
 
class RentIsTooHighVideo extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
    //   startSeconds: 24,
    //   endSeconds: 90,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      <YouTube
        videoId="V19w4XvihmY"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
 
export default RentIsTooHighVideo;