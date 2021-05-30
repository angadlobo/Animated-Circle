import React, { useEffect, useState } from 'react';
import './CircularProgressbar.scss';

const CircleAnimation = (props) => {
  const [state, setstate] = useState({});
  const sqSize = props.sqSize;
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (props.sqSize - props.strokeWidth) / 2;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * props.percentage) / 100;
  return (
    <svg width={props.sqSize} height={props.sqSize} viewBox={viewBox}>
      <circle
        className="circle-background"
        cx={props.sqSize / 2}
        cy={props.sqSize / 2}
        r={radius}
        strokeWidth={`${props.strokeWidth}px`}
      />
      <circle
        className="circle-progress"
        stroke={props.levelColor}
        cx={props.sqSize / 2}
        cy={props.sqSize / 2}
        r={radius}
        strokeWidth={`${props.strokeWidth}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${props.sqSize / 2} ${props.sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset
        }}
      />
      <text className="circle-text" x="50%" y="50%" dy=".3em" textAnchor="middle">
        {props.levelText}
      </text>
    </svg>
  );
};

CircleAnimation.props = {
  sqSize: 200,
  percentage: 100,
  strokeWidth: 10
};

const ProgressBar = (props) => {
  const [state, setstate] = useState({
    percentage: 1,
    speed: 1,
    interval: 0
  });

  const percentagelevel = props.levelPercentage;
  // const [hover, setHover] = useState(false);

  useEffect(() => {
    state.interval = setInterval(() => frame(), 10);
    return () => {
      clearInterval(state.interval);
    };
  });

  const frame = () => {
    if (state.percentage < percentagelevel) {
      setstate({
        percentage: state.percentage + 1
      });
    } else {
      clearInterval(state.interval);
    }
  };
  return (
    <CircleAnimation
      levelText={props.levelText}
      levelColor={props.levelColor}
      strokeWidth="15"
      sqSize="200"
      percentage={state.percentage}
    />
  );
};

export default ProgressBar;
