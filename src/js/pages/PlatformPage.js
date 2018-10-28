import React from 'react';
import LazyLoad from 'react-lazy-load'
import UserInterface from '../components/user_interface/UserInterface.js';
import Epub from '../components/Epub.js';
import { S3_BUCKET_URL } from '../utils'
import { sections } from '../data/footer.json'

const props = sections.filter((section) => section.title === "Platform")[0].tabs[0];
const { poster, video } = sections.filter((section) => section.title === "Platform")[0].tabs[1];

const PlatformPage = () =>
  <div className="page o-hidden mt-md-4">
    <UserInterface showPlatformTitle={true} />
    <Epub showImage={ true } btnLabel="Download" { ...props } />
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

export default PlatformPage;
