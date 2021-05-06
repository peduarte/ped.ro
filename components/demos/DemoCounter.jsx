import React from 'react';
import { StitchesVariants } from '@stitches/core';
import { demoButton } from './DemoButton';

export function DemoCounter({ color = 'turq', initialCount = 0 }) {
  const [count, setCount] = React.useState(initialCount);

  return (
    <button
      type="button"
      onClick={() => setCount((prevCount) => prevCount + 1)}
      className={demoButton({ color })}
    >
      {count}
    </button>
  );
}
