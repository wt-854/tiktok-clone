import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';

function Video() {
  const [play, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className='video'>
      <video
        className='video__player'
        loop
        onClick={onVideoPress}
        ref={videoRef}
        //controls
        src='https://v16m.tiktokcdn.com/fdc83ec48b966f91276bcae417e17a00/5f2c6c66/video/tos/alisg/tos-alisg-pve-0037/9cc72e7216404da095908949417d4d99/?a=1180\u0026br=2638\u0026bt=1319\u0026cr=0\u0026cs=0\u0026dr=3\u0026ds=3\u0026er=\u0026l=202008042047340101151192460B242F47\u0026lr=tiktok\u0026mime_type=video_mp4\u0026qs=0\u0026rc=amo7Om53bzY5dDMzOzgzM0ApODlnZzU7Zzs2N2RoNzdmOGdmMWQxZ2hnbmVfLS01LzRzc2JjXjRfMi5jXjVeNl40L2I6Yw%3D%3D\u0026vl=\u0026vr='
        //src='https://v16m.tiktokcdn.com/4f7ee31207242c8cef6abb2139f2230a/5f2c6d11/video/tos/alisg/tos-alisg-pve-0037/b48b4ad35e854d8985fcf92be6b3cafc/?a=1180\u0026br=3060\u0026bt=1530\u0026cr=0\u0026cs=0\u0026dr=3\u0026ds=3\u0026er=\u0026l=20200804205025010116035215310486D7\u0026lr=tiktok\u0026mime_type=video_mp4\u0026qs=0\u0026rc=M3hna286b2xodjMzNTgzM0ApODU1NmU5aDxmN2Y0aTo1PGdmcTZscXFzc2VfLS02LzRzc182NjEzXzBgMjAvMjY2XzA6Yw%3D%3D\u0026vl=\u0026vr='
      ></video>
      <VideoFooter
        channel='baifern_bah'
        description='check out this dance'
        song='random song'
      />
    </div>
  );
}

export default Video;
