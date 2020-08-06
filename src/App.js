import React, { useState, useEffect } from 'react';
import Video from './Video';
import db from './firebase';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);

  /* 
    (i)  if dependency is empty array, fires once when the component loads, 
         BUT never after it changes
    (ii) if dependency is not empty, fires once when the component loads, 
         AND whenever it changes
  */
  useEffect(() => {
    db.collection('videos').onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [videos]);

  return (
    <div className='app'>
      <div className='app__videos'>
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              key={url}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
