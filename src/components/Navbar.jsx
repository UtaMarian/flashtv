import React from "react";
import AppIcon from "../assets/flashtv.png";

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center text-3xl font-bold">
        <img src={AppIcon} alt="icon" className="w-10 h-10 mr-4 object-cover rounded" />
        FLASH TV
      </div>
      {setActiveTab && (
        <div className="space-x-4">
          <button
            onClick={() => setActiveTab("tv")}
            className={`px-4 py-2 rounded ${activeTab === "tv" ? "bg-zinc-700" : "bg-zinc-800 hover:bg-zinc-700"}`}
          >
            TV
          </button>
          <button
            onClick={() => setActiveTab("news")}
            className={`px-4 py-2 rounded ${activeTab === "news" ? "bg-zinc-700" : "bg-zinc-800 hover:bg-zinc-700"}`}
          >
            Știri
          </button>
          <button
            onClick={() => setActiveTab("clubworldcup")}
            className={`px-4 py-2 rounded ${activeTab === "clubworldcup" ? "bg-zinc-700" : "bg-zinc-800 hover:bg-zinc-700"}`}
          >
            Club World Cup
          </button>
        </div>
      )}
    </div>
  );
}
