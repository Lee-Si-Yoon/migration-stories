// @ts-nocheck

"use client";

import Script from "next/script";

const GTAG_ID = "G-499FR3EXB6";

export default function GtagScript() {
  return (
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
      onLoad={() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "TAG_ID");
      }}
    />
  );
}
