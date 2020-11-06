import React from 'react';
import propTypes from 'prop-types';

import './index.scss';

export default function Star({ className, value, height, width, spacing }) {
  const decimals = Number(value) % 1
  const star = []
  let leftPos = 0

  for(let idx = 0; idx < 5 && idx < value - decimals; idx++) {
    leftPos = leftPos + width
    star.push(
      <div
      className="star"
      key={`star-${idx}`}
        style={{ left: idx * width, height: height, width: width, marginRight: spacing }} 
      ></div>
    )
  }

  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        key={`starWithDecimal`}
        style={{ left: leftPos, height: height, width: decimals * width - spacing }}
      ></div>
    )
  }

  const starPlaceholder = []
  for (let idx = 0; idx < 5; idx++) {
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={`starPlaceholder-${idx}`}
        style={{ left: idx * width, height: height, width: width, marginRight: spacing }}
      ></div>
    )
  }

  return (
    <>
      <div className={['stars', className].join(" ")} style={{ height: height }} >
        {starPlaceholder}
        {star}
      </div>
    </>
  )
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
}
