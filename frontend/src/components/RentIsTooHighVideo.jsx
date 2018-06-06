import React, { Component }from 'react';
import YouTube from 'react-youtube';
import KnowYourRightsVideo from './KnowYourRightsVideo';
 
class RentIsTooHighVideo extends Component {
  render(){
    return(
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/V19w4XvihmY?rel=0&amp;showinfo=0&amp;start=24" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    )
  }

  // instead of using the react-you-tube component, use regular embedding to control playback start time.
  //   const opts = {
  //     height: '390',
  //     width: '640',
  //     // startSeconds: '24',
  //     // endSeconds: '90',
  //     playerVars: { // https://developers.google.com/youtube/player_parameters
  //       autoplay: 1
  //     }
  //   };
 
  //   return (
  //     <YouTube
  //       videoId="V19w4XvihmY"
  //       opts={opts}
  //       onReady={this._onReady}
  //     />
  //   );
  // }
 
  // _onReady(event) {
  //   // access to player in all event handlers via event.target
  //   // event.target.pauseVideo();
    
  // }
}
 
export default RentIsTooHighVideo;