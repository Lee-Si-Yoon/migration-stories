'use client';

import React, { useEffect, useState } from 'react';

interface ProgressiveImgProps {
  placeholderSrc: string;
  alt: string;
  src: string;
  className?: string;
}

export default function ProgressiveImg({
  placeholderSrc,
  src,
  className,
  ...props
}: ProgressiveImgProps) {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <img
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ''}
      className={className}
      loading="lazy"
      draggable="false"
      width={'100%'}
      height={'auto'}
      style={{
        filter: placeholderSrc && imgSrc === placeholderSrc ? 'blur(10px)' : 'blur(0px)',
        transition: 'filter 0.5s linear',
      }}
    />
  );
}
