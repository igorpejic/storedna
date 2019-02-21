import React from 'react';
import LazyLoad from 'react-lazy-load'
import Intro from '../components/Intro.js';
import { getFooterItem } from '../utils.js'
import { S3_BUCKET_URL } from '../utils'

const VideoPage = ({match}) => {
  const props = getFooterItem(match.params.videoId)
  const { video, title, subtitle, poster, illustration } = props;

  return (
    <div className="page o-hidden">
      <Intro illustration={ illustration }>
        <div className="intro__text t-white d-flex flex-column justify-content-center align-items-center">
          <h1 className="heading mb-3 p-0">{ title }</h1>
          <p className="t-2 t-center px-4 w-75">{ subtitle }</p>
        </div>
      </Intro>
      <div className="scroll-1 p-lg-6" style={{ backgroundColor: "#b8b6b4" }}>
        <LazyLoad offsetVertical={ 500 } debounce={ false } className="d-flex">
          <video
            className="mx-auto"
            width="100%"
            height="40%"
            poster={ poster }
            src={ S3_BUCKET_URL + video }
            muted controls playsInline />
        </LazyLoad>
      </div>
    </div>
  )
}

export default VideoPage;
