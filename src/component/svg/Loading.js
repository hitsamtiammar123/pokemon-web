import React from 'react';
import PropTypes from 'prop-types';

export default function Loading({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      style={{
        margin: 'auto',
        background: 'white',
        display: 'block',
        shapeRendering: 'auto',
      }}
      width={width}
      height={height}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="30" cy="50" fill="#d29a2d" r="20">
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="30;70;30"
          begin="-0.5s"
        ></animate>
      </circle>
      <circle cx="70" cy="50" fill="#e76a24" r="20">
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="30;70;30"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="30" cy="50" fill="#d29a2d" r="20">
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="30;70;30"
          begin="-0.5s"
        ></animate>
        <animate
          attributeName="fill-opacity"
          values="0;0;1;1"
          calcMode="discrete"
          keyTimes="0;0.499;0.5;1"
          dur="1s"
          repeatCount="indefinite"
        ></animate>
      </circle>
    </svg>
  );
}

Loading.defaultProps = {
  width: '200px',
  height: '200px',
};

Loading.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
