import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import "./Phonetic.css"

// export default function Phonetic(props) {
//     return (
//       <div className="Phonetic">
//         <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
//           Listen
//         </a>
//         <span className="text">{props.phonetic.text}</span>
        
//       </div>
//     );
// }

export default function Phonetic(props) {
  if (props.phonetic.audio === '') {
    return null;
  } else {
    return (
      <header className="phonetics">
        <div className="Phonetic">
          <ReactAudioPlayer
            src={props.phonetic.audio}
            controlsList={'nodownload'}
            controls
            className="sound"
          />
          <div className="text">{props.phonetic.text}</div>
        </div>
      </header>
    );
  }
}

