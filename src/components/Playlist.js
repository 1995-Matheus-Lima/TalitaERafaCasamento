import React from 'react';
import SpotIcon from '../assets/social.png'
const Playlist = () => {
  return (
    <div className='spotify'>
      <p>Esperamos vocês no grande dia! Até lá, aproveite para contribuir com a nossa playlist do casamento!</p>
      <div id="spotifyicon">
        <a href='https://open.spotify.com/playlist/77Bc3P14D2XpP85dVjiGHF?si=e0a81b5a090d452f&pt=465919019aa47d6a30b52f2449f954f0 ' target="_blank" rel="noopener" >
          <p>Colaborar com nossa Playlist</p>
          <img id="spotify-icon" src={SpotIcon}/>
        </a>
    </div>
    <p>Beijos das princesas!</p>
    </div>
  );
};

export default Playlist;
