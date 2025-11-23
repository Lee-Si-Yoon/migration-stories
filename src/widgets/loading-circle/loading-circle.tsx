import React from 'react';

import classes from './loading-circle.module.scss';

interface LoadingCircleProps {
  text?: string;
}

function LoadingCircle(props: LoadingCircleProps) {
  const { text = 'loading...' } = props;
  return (
    <div className={classes.Container}>
      <div className={classes.Spinner} />
      <p style={{ color: 'white' }}>{text}</p>
    </div>
  );
}

LoadingCircle.displayName = 'LoadingCircle';

export default LoadingCircle;
