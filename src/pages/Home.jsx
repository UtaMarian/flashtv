import React, { useState } from 'react';
import { channels } from '../data';
import IframePlayer from '../components/IframePlayer';
import ChannelCard from '../components/ChannelCard';
import AppIcon from '../assets/flashtv.png';
export default function Home() {
  const [selectedChannel, setSelectedChannel] = useState(channels[0]);
  const [search, setSearch] = useState("");

  const filtered = channels.filter(channel =>
    channel.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-zinc-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4 flex">
        <img src={AppIcon} alt='icon' className="w-10 h-10 mr-5 object-cover rounded" />
        FLASH TV
      </h1>

      <input
        className="w-full p-2 mb-4 rounded bg-zinc-800"
        placeholder="Cauta canal..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <IframePlayer url={selectedChannel.iframeUrl} />

      <h2 className="text-xl font-semibold mt-6 mb-2">Canale disponibile</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filtered.map(channel => (
          <ChannelCard key={channel.id} channel={channel} onSelect={setSelectedChannel} />
        ))}
      </div>
    </div>
  );
}
