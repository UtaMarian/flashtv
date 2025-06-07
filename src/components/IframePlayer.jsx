import React from 'react';

export default function IframePlayer({ url }) {
  return (
    <div className="w-full aspect-video mt-4 border rounded overflow-hidden">
      <iframe
      title='Live Stream Player'
        src={url}
        className="w-full h-full"
        allowFullScreen
        allow="fullscreen; encrypted-media"
      ></iframe>
    </div>
  );
}
