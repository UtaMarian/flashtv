import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { news } from "../news";
import Navbar from "../components/Navbar";

export default function NewsDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const item = news.find((n) => n.slug === slug);
  if (!item)
    return (
      <div className="p-6 bg-zinc-900 min-h-screen text-white">
        <Navbar />
        <div className="text-center text-xl mt-10">Știrea nu a fost găsită.</div>
      </div>
    );

  return (
    <div className="bg-zinc-900 min-h-screen text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate("/#news")}
          className="mb-6 inline-flex items-center text-sm font-medium bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded transition"
        >
          ← Înapoi la Știri
        </button>

        <h1 className="text-4xl font-bold mb-6 leading-tight">{item.title}</h1>

        <img
          src={item.image}
          alt={item.title}
          className="w-full max-h-[500px] object-cover rounded-lg shadow mb-6"
        />

        <p className="text-lg leading-relaxed text-zinc-200 whitespace-pre-line">
          {item.content}
        </p>
      </div>
    </div>
  );
}
