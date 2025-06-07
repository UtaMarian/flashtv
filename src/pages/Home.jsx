import React, { useState } from 'react';
import { channels } from '../data';
import IframePlayer from '../components/IframePlayer';
import ChannelCard from '../components/ChannelCard';
import NewsSection from '../components/NewsSection';
import Navbar from '../components/Navbar';

export default function Home() {
  const [selectedChannel, setSelectedChannel] = useState(channels[0]);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("tv");

  const filtered = channels.filter(channel =>
    channel.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-zinc-900 min-h-screen text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "tv" && (
        <>
          <input
            className="w-full p-2 mb-4 rounded bg-zinc-800"
            placeholder="Caută canal..."
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
        </>
      )}

      {activeTab === "news" && <NewsSection />}
    </div>
  );
}
