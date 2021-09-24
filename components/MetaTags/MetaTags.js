import React from "react";

const MetaTags = () => {
  return (
    <React.Fragment>
      <meta name="application-name" content="Be BodyWise" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Be BodyWise" />
      <meta name="description" content="Be Bodywise PWA app" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="msapplication-config"
        content="/static/icons/browserconfig.xml"
      />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />
      
      <title>Be Bodywise</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Women's Wellness. Simplified" />
      
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/DummyLogo/ios/AppIcon.appiconset/Icon-App-60x60@3x.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="29x29"
        href="/DummyLogo/ios/AppIcon.appiconset/Icon-App-29x29@2x.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="20x20"
        href="/DummyLogo/ios/AppIcon.appiconset/Icon-App-20x20@1x.png"
      />
    </React.Fragment>
  );
};

export default MetaTags;
