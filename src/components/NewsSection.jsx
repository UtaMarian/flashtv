import React, { useState } from 'react';
import { news } from '../news';
import { Link } from 'react-router-dom';

export default function NewsSection() {
  const [search, setSearch] = useState('');

  const filteredNews = news.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Știri Sportive</h2>

      <input
        type="text"
        placeholder="Caută știri..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 p-2 rounded bg-zinc-800 text-white placeholder-zinc-400"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
       {filteredNews.length > 0 ? (
            filteredNews
                .slice() // create a copy to avoid mutating original array
                .sort((a, b) => b.id - a.id) // descending order by id
                .map((item) => (
                <Link key={item.id} to={`/stire/${item.slug}`}>
                    <div className="bg-zinc-800 rounded overflow-hidden shadow-md hover:opacity-90 transition">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-80 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                        <p className="text-sm text-zinc-300">{item.summary}</p>
                    </div>
                    </div>
                </Link>
                ))
            ) : (
            <p className="text-zinc-400">Nu s-au găsit știri care să corespundă căutării.</p>
        )}
      </div>
    </div>
  );
}
