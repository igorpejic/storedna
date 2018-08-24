import React from 'react';
import LazyLoad from 'react-lazy-load'
import Intro from '../components/Intro.js';
import { getFooterItem } from '../utils.js'
import { S3_BUCKET_URL } from '../utils'

const VideoPage = ({match}) => {
  const props = getFooterItem(match.params.videoId)
  const { video, title, subtitle, poster, illustration } = props;

  return (
    <div className="page">
      <Intro
        title={ title }
        subtitle={ subtitle }
        illustration={ illustration } />
      <div className="scroll-1 p-6" style={{ backgroundColor: "#b8b6b4" }}>
        <LazyLoad offsetVertical={ 500 } debounce={ false } className="d-flex">
          <video
            className="mx-auto"
            style={{ maxHeight: '80vh', maxWidth: '100%' }}
            poster={ poster }
            src={ S3_BUCKET_URL + video }
            muted controls playsInline />
        </LazyLoad>
      </div>
    </div>
  )
}

export default VideoPage;
