import React from 'react';
import Video from './Video';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='app__videos'>
        <Video
          url='https://v16m.tiktokcdn.com/fdc924bba22060bd032f44d5f4b4a33e/5f2c7f5b/video/tos/alisg/tos-alisg-pve-0037/2530ac5168264118945c581f87dcf61b/?a=1180&br=1150&bt=575&cr=0&cs=0&dr=3&ds=3&er=&l=202008042208270101151531321F267574&lr=tiktok&mime_type=video_mp4&qs=0&rc=ajdsZTo1dnZzdjMzNjgzM0ApNzw1MzRoOWU2NzwzZ2c8OWdwYmRmMGNjbGBfLS02LzRzczRgLi1fMS82X2ExXzA2L146Yw==&vl=&vr='
          channel='anurinn'
          description='ชอบแบบนี้..😊น้องใบ🌿 #baifern #baifernbah'
          song='ชอบแบบนี้ - หนามเตย สะแบงบิน'
          likes={17100}
          messages={73}
          shares={40}
        />
        <Video
          url='https://v16m.tiktokcdn.com/b8e05f7d681bb46553cce5ce3be9a0ed/5f2eb68f/video/n/v0102/1c6bf513581947b1b0da48363c745590/?a=1180&br=1756&bt=878&cr=0&cs=0&dr=3&ds=3&er=&l=202008061428310101150170201811403C&lr=tiktok&mime_type=video_mp4&qs=0&rc=ajNqM21za3A1ZzMzZTgzM0ApNzo7NGU8PDtkN2Y6Nmk4ZWdgaGRxZmNgX2RfLS01LzRzcy81MDM2MV5fNV4wNS1eYTY6Yw%3D%3D&vl=&vr='
          channel='bp_tiktok'
          description='#DDU_DU_DDU_DU Dance Practice Video #뚜두뚜두 #안무영상 #블랙핑크 #BLACKPINK #YG'
          song='오리지널 사운드 - blackpinkofficial'
          likes={890100}
          messages={9883}
          shares={4845}
        />
        <Video
          url='https://v16m.tiktokcdn.com/0ff1eaa6ead26467b83c8297b479150e/5f2eb508/video/tos/alisg/tos-alisg-pve-0037/b757e5756782416986790279343250d4/?a=1180&br=2094&bt=1047&cr=0&cs=0&dr=3&ds=3&er=&l=202008061422000101152290640F10A085&lr=tiktok&mime_type=video_mp4&qs=0&rc=am15dXU2dmZudTMzZzgzM0ApNTo3ZTNkOztoN2RoODQ2OmczMWxxYWheY2FfLS1eLzRzc142Ml41MDU2YGMuLS1fNjM6Yw%3D%3D&vl=&vr='
          channel='jasminesokko'
          description='the video for 困兽游戏 I LIKE IT is put tgt remotely thru video calls and many excel spread sheets! enjoy and stay sane and safe, yall 🏠💕 #jasminesokko #fyp'
          song='《困兽游戏》 - 楚晴Jasmine Sokko'
          likes={333}
          messages={14}
          shares={6}
        />

        <Video />
      </div>
    </div>
  );
}

export default App;
