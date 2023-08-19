import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProgressiveImage = styled.img<{ loadingProp: "loading" | "loaded" }>`
  filter: ${(props) =>
    props.loadingProp === "loading" ? "blur(10px)" : "blur(0px)"};
  /* clip-path: ${(props) =>
    props.loadingProp === "loading" ? "inset(0)" : null}; */
  transition: filter 0.5s linear;
`;

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

  const loadingProp =
    placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";

  return (
    <ProgressiveImage
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      draggable="false"
      loadingProp={loadingProp}
    />
  );
}
