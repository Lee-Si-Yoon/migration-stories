import {
  stagger,
  useAnimate,
  type ElementOrSelector,
  type DOMKeyframesDefinition,
  type DynamicAnimationOptions,
} from "framer-motion";
import React from "react";

function useStaggerInitialAnimation({
  targetChild,
  keyFrames = { opacity: 1 },
  options = { duration: 0.2, delay: stagger(0.1) },
}: {
  targetChild: ElementOrSelector;
  keyFrames?: DOMKeyframesDefinition;
  options?: DynamicAnimationOptions;
}) {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    animate(targetChild, keyFrames, options).play();
  }, []);

  return scope;
}

export { useStaggerInitialAnimation };
