import {
  stagger,
  useAnimate,
  type ElementOrSelector,
  type DOMKeyframesDefinition,
  type AnimationOptions,
} from 'framer-motion';
import { useEffect } from 'react';

export function useStaggerInitialAnimation({
  targetChild,
  keyFrames = { opacity: 1 },
  options = { duration: 0.2, delay: stagger(0.1) },
}: {
  targetChild: ElementOrSelector;
  keyFrames?: DOMKeyframesDefinition;
  options?: AnimationOptions;
}) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(targetChild, keyFrames, options).play();
  }, [animate, targetChild, keyFrames, options]);

  return scope;
}
