import React from 'react';

export default function VideoPlayer({ streamUrl }) {
  return (
    <div className="mt-4 w-full">
      <video className="w-full rounded-xl border" controls autoPlay>
        <source src={streamUrl} type="application/x-mpegURL" />
        Your browser does not support HLS streaming.
      </video>
    </div>
  );
}
