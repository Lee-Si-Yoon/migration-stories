import React, { useEffect, useState } from "react";

interface ProgressiveImgProps {
  placeholderSrc: string;
  alt: string;
  src: string;
}

export default function ProgressiveImg({
  placeholderSrc,
  src,
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
      alt={props.alt || ""}
      draggable="false"
      // loadingprop={loadingprop}
      style={{
        filter:
          placeholderSrc && imgSrc === placeholderSrc
            ? "blur(10px)"
            : "blur(0px)",
        transition: "filter 0.5s linear",
      }}
    />
  );
}
