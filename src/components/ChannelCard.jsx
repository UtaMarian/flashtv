import React from 'react';

export default function ChannelCard({ channel, onSelect }) {
  return (
    <div
      onClick={() => onSelect(channel)}
      className="cursor-pointer p-2 rounded hover:bg-gray-800 transition"
    >
      <img src={channel.thumbnail} alt={channel.name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 font-semibold">{channel.name}</h3>
      <p className="text-sm text-gray-400">{channel.category}</p>
    </div>
  );
}
