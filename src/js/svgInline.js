import React from 'react';

export const defaultBox = (color, id) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.99 126" className="overlay-box pos-absolute pos-left w-100">
    <style>
      {`#${id} { fill: ${color};}`}
    </style>
      <g id="box">
        <rect id={id} className="box" width="267.99" height="126"/>
      </g>
    </svg>
  );
}


export const peeledBoxLeft = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 267.99 126" className="overlay-box pos-absolute pos-left w-100">
      <defs>
        <linearGradient id="linear-gradient" x1="747.76" y1="43.95" x2="686.39" y2="-31.65" gradientTransform="matrix(1, 0, 0, -1, -656.62, 95.25)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff"/>
          <stop offset="0.09" stopColor="#faf7f3"/>
          <stop offset="0.25" stopColor="#eee2d3"/>
          <stop offset="0.46" stopColor="#d9c0a0"/>
          <stop offset="0.71" stopColor="#bd915a"/>
          <stop offset="0.93" stopColor="#a36518"/>
        </linearGradient>
      </defs>
      <g id="box-peel-left" className="overlay-box">
        <g id="box">
          <path className="box-peel" fill="#f59b41" d="M268,0H0V58a7.15,7.15,0,0,0,6.41,7.11A72,72,0,0,0,54.49,52.25s21.44,50.42,57.17,66.92c4.39,2,12.51,1.83,39.31,1.83H268Z"/>
        </g>
        <path id="corner" className="corner" fill="url(#linear-gradient)" d="M111.66,119.16,4.74,64.59C25,68.75,54.49,52.25,54.49,52.25S76.83,99,111.66,119.16Z"/>
      </g>
    </svg>
  );
}

export const peeledBoxRight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 267.99 126" className="overlay-box pos-absolute pos-left w-100">
      <defs>
        <linearGradient id="linear-gradient" x1="747.76" y1="43.95" x2="686.39" y2="-31.65" gradientTransform="translate(924.62 95.25) rotate(180)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff"/>
          <stop offset="0.09" stopColor="#faf7f3"/>
          <stop offset="0.25" stopColor="#eee2d3"/>
          <stop offset="0.46" stopColor="#d9c0a0"/>
          <stop offset="0.71" stopColor="#bd915a"/>
          <stop offset="0.93" stopColor="#a36518"/>
        </linearGradient>
      </defs>
      <g id="box-peel-left">
        <g id="box">
          <path className="box-peel" fill="#f59b41" d="M0,0H268V58a7.15,7.15,0,0,1-6.41,7.11A72,72,0,0,1,213.5,52.25s-21.44,50.42-57.17,66.92c-4.39,2-12.51,1.83-39.31,1.83H0Z"/>
        </g>
        <path id="corner" className="corner" fill="url(#linear-gradient)" d="M156.33,119.16,263.26,64.59C243,68.75,213.5,52.25,213.5,52.25S191.17,99,156.33,119.16Z"/>
      </g>
    </svg>
  );
}

export const categoryItem = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.79 74.39" className="pos-absolute actionboard-item category-item">
      <title>category-item</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Design">
          <path className="item__path item__lblbg" d="M61.22,48.86H56.39v-9a3,3,0,0,0-3-3h-41a3,3,0,0,0-3,3v9H3.56a3,3,0,0,0-3,3v19a3,3,0,0,0,3,3H61.22a3,3,0,0,0,3-3v-19A3,3,0,0,0,61.22,48.86Z"/>
          <text className="item__path item__label" transform="translate(16.34 52.47)">Men’s<tspan x="-6.27" y="12.4">Running</tspan></text>
          <path className="item__path category-item__shoe-dark" d="M64.28,22c.05,1.91-.11,3.28-3.86,5.11a40.78,40.78,0,0,1-7.34,2.6c-.34.09-.71,0-1.06.08s-.57.39-.92.47-.78-.09-1.13,0-.65.37-1,.44-.71-.14-1.07-.09-.63.47-1,.52-.74-.27-1.1-.23-.65.44-1,.48-.73-.29-1.08-.26-.66.43-1,.46-.72-.31-1.08-.29-.66.42-1,.43-.71-.32-1.07-.31-.67.4-1,.42-.71-.34-1.06-.33-.69.38-1,.39-.71-.35-1.06-.34-.69.37-1,.37-.7-.37-1-.37-.7.37-1.05.36-.69-.37-1-.37-.71.36-1.05.35-.69-.38-1-.4-.71.35-1.06.34-.68-.39-1-.41-.71.34-1.06.32-.68-.4-1-.42-.71.33-1.07.31-.67-.4-1-.43-.71.32-1.07.3-.67-.41-1-.43-.72.31-1.07.29-.67-.42-1-.44-.72.31-1.07.28-.66-.43-1-.45-.72.31-1.08.27-.66-.43-1-.46-.73.3-1.08.26-.66-.43-1-.47-.7.22-1,.19-.7-.37-1-.41-.72.18-1.07.14-.67-.33-1-.37S7.39,30,7,30C.85,29.23.5,26.61.5,24c0,0,.06-1.71,1-2,4.91,0,7.65.57,14.91,2.17l4.44,1C33.57,27.89,59.71,29,64.28,22Z"/>
          <path className="item__path category-item__shoe-light" d="M33.32,9.07l.37.27A20.68,20.68,0,0,0,36,10.72l.13.06c.83.45,1.78.9,2.8,1.37l.09,0c.9.42,1.86.83,2.86,1.23C47.48,15.73,54,17.82,56.51,18c4,.31,7.74.12,7.74,2.75,0,.44,0,.85,0,1.23-4.57,7-30.71,5.9-43.46,3.12l-4.44-1c.82-6.87-7-9.52-10.62-12a13.51,13.51,0,0,0,.79-3.65c2.64,2,5.89,4.55,9,4.55S25,8.3,27.3,5.4A32.6,32.6,0,0,1,33.32,9.07Z"/>
          <path className="item__path category-item__shoe-dark" d="M33.34,9l0,0a32.6,32.6,0,0,0-6-3.67,11.07,11.07,0,0,0-4.2-.93h0c0-1-.16-3.57,1.83-3.57C27.24.89,30.87,6.5,33.34,9Z"/>
          <path className="item__path category-item__shoe-dark" d="M23.1,4.47a11.07,11.07,0,0,1,4.2.93c-2.3,2.9-8.55,7.66-11.7,7.66s-6.41-2.56-9-4.55c0-1.9,1.39-4.85,2.82-5.66a1.5,1.5,0,0,1,.72-.21c3.17,0,.22,7.14,3.82,7.14,3.11,0,6.41-5.31,8.85-5.31Z"/>
          <path className="item__path category-item__shoe-light" d="M5.77,12.16c3.61,2.46,11.43,5.1,10.62,12C9.12,22.54,6.38,22,1.47,22a27.75,27.75,0,0,1,2-4.33A35.66,35.66,0,0,0,5.77,12.16Z"/>
          <path className="item__path item__outline" d="M23.1,4.46c0-1-.16-3.57,1.83-3.57C27.24.89,30.87,6.5,33.34,9l.2.2"/>
          <path className="item__path item__outline" d="M64.28,22c.05,1.91-.11,3.28-3.86,5.11a40.78,40.78,0,0,1-7.34,2.6c-.34.09-.71,0-1.06.08s-.57.39-.92.47-.78-.09-1.13,0-.65.37-1,.44-.71-.14-1.07-.09-.63.47-1,.52-.74-.27-1.1-.23-.65.44-1,.48-.73-.29-1.08-.26-.66.43-1,.46-.72-.31-1.08-.29-.66.42-1,.43-.71-.32-1.07-.31-.67.4-1,.42-.71-.34-1.06-.33-.69.38-1,.39-.71-.35-1.06-.34-.69.37-1,.37-.7-.37-1-.37-.7.37-1.05.36-.69-.37-1-.37-.71.36-1.05.35-.69-.38-1-.4-.71.35-1.06.34-.68-.39-1-.41-.71.34-1.06.32-.68-.4-1-.42-.71.33-1.07.31-.67-.4-1-.43-.71.32-1.07.3-.67-.41-1-.43-.72.31-1.07.29-.67-.42-1-.44-.72.31-1.07.28-.66-.43-1-.45-.72.31-1.08.27-.66-.43-1-.46-.73.3-1.08.26-.66-.43-1-.47-.7.22-1,.19-.7-.37-1-.41-.72.18-1.07.14-.67-.33-1-.37S7.39,30,7,30C.85,29.23.5,26.61.5,24c0,0,.06-1.71,1-2a27.75,27.75,0,0,1,2-4.33,35.66,35.66,0,0,0,2.34-5.48,13.51,13.51,0,0,0,.79-3.65c0-1.9,1.39-4.85,2.82-5.66a1.5,1.5,0,0,1,.72-.21c3.17,0,.22,7.14,3.82,7.14,3.11,0,6.41-5.31,8.85-5.31h.33a11.07,11.07,0,0,1,4.2.93,32.6,32.6,0,0,1,6,3.67l.37.27A20.68,20.68,0,0,0,36,10.72l.13.06c.83.45,1.78.9,2.8,1.37l.09,0c.9.42,1.86.83,2.86,1.23C47.48,15.73,54,17.82,56.51,18c4,.31,7.74.12,7.74,2.75C64.25,21.2,64.27,21.6,64.28,22Z"/>
          <path className="item__path item__outline" d="M1.47,22c4.91,0,7.65.57,14.91,2.17l4.44,1C33.57,27.89,59.71,29,64.28,22v0"/>
          <path className="item__path item__outline" d="M6.56,8.51c2.64,2,5.89,4.55,9,4.55S25,8.3,27.3,5.4"/>
          <path className="item__path item__outline" d="M5.77,12.16c3.61,2.46,11.43,5.1,10.62,12"/>
          <path className="item__path item__outline" d="M9.38,2.85S9.72.5,8.21.5,6.57,6,6.56,8.51"/>
          <path className="item__path item__outline" d="M33.27,9.13l0-.06,0,0a1.46,1.46,0,0,1,1.91-.19A1.41,1.41,0,0,1,36,10.69"/>
          <path className="item__path item__outline" d="M36.11,10.72a1.43,1.43,0,0,1,2-.37,1.43,1.43,0,0,1,.82,1.79v0"/>
          <path className="item__path item__outline" d="M39,12.17a1.43,1.43,0,0,1,1.92-.51,1.41,1.41,0,0,1,.93,1.75h0"/>
        </g>
      </g>
    </svg>
  );
}

export const locationPin = (label) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.45 63.42" key={label} className="store-item pos-absolute">
      <title>store-item</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Design">
          <path id="svg_1" data-name="svg 1" className="item__path store-item-pin" d="M51.2,12.27c0,6.77-12,23-12,23s-12-16.23-11.95-23a12,12,0,1,1,23.95,0Zm-12-5.19a5.16,5.16,0,1,0,5,5.16,5.1,5.1,0,0,0-5-5.16Z"/>
          <rect className="item__path item__lblbg" x="0.54" y="38.39" width="77.38" height="24.5" rx="11.71" ry="11.71"/>
          <text className="item__path item__label" transform="translate(19.26 54.13)">{ label }</text>
        </g>
      </g>
    </svg>
  )
}

export const arrowDown = () => {
  return (
    <svg className="arrow-download" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.92 17.71">
      <title>arrow-download</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <line className="arrow-download__path" x1="7.46" x2="7.46" y2="16.42"/>
          <polyline className="arrow-download__path" points="14.22 9.54 7.46 16.29 0.71 9.54"/>
        </g>
      </g>
    </svg>
  )
}
