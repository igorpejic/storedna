import React from 'react';
import LazyLoad from 'react-lazy-load'
import Intro from '../components/Intro.js';
import { getFooterItem } from '../utils.js'

const VideoPage = ({match}) => {
  const props = getFooterItem(match.params.videoId)
  const { video, title, subtitle, poster, illustration } = props;

  return (
    <div className="page">
      <Intro
        title={ title }
        subtitle={ subtitle }
        illustration={ illustration } />
      <div className="bg-brand-dark p-6">
        <LazyLoad offsetVertical={ 500 } debounce={ false } className="d-flex">
          <video
            className="scroll-1 mx-auto"
            style={{maxHeight: '100vh', maxWidth: '100%'}}
            poster={ poster }
            src={ video }
            muted playsInline loop autoPlay />
        </LazyLoad>
      </div>
    </div>
  )
}

export default VideoPage;
