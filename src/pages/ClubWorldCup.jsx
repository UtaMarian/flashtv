import React, { useState } from "react";
import { clubWorldCup } from "../clubworldcup";
import { topScorers } from "../scorer";

export default function ClubWorldCup() {
  const [activeTab, setActiveTab] = useState("clasament");
  const [fade, setFade] = useState("opacity-100");

  const sortTeams = (teams) => {
    return [...teams].sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      const gdA = a.gf - a.ga;
      const gdB = b.gf - b.ga;
      return gdB - gdA;
    });
  };
    const handleTabChange = (tab) => {
    setFade("opacity-0");
    setTimeout(() => {
        setActiveTab(tab);
        setFade("opacity-100");
    }, 200); // match transition duration
    };

  return (
    <div className="bg-gradient-to-br from-zinc-900 via-zinc-900">
      <div className="p-8 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 min-h-screen text-white max-w-7xl mx-auto rounded-lg shadow-lg">
        {/* Banner */}
        <div className="relative w-full h-64 mb-10">
          <div
            className="absolute inset-0 bg-cover bg-center filter brightness-75"
            style={{ backgroundImage: "url('/clubworldcover.png')" }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <h1 className="relative z-10 flex items-center justify-center h-full text-5xl font-extrabold tracking-wide text-amber-400 drop-shadow-lg">
            Club World Cup 2025
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 space-x-4">
          {["clasament", "marcatori", "playoff"].map((tab) => (
            <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-6 py-2 text-lg font-semibold rounded-full transition 
                    ${
                    activeTab === tab
                        ? "bg-amber-500 text-black shadow"
                        : "bg-zinc-700 hover:bg-zinc-600 text-white"
                    }`}
                >
                {tab === "clasament"
                    ? "Clasament"
                    : tab === "marcatori"
                    ? "Marcatori"
                    : "Play-Off"}
            </button>
          ))}
        </div>

        {/* Content by tab */}
        <div className={`transition-opacity duration-300 ease-in-out ${fade}`}>
        {activeTab === "clasament" && (
          <>
            {clubWorldCup.groups.map((group) => (
              <section key={group.id} className="mb-14">
                <h2 className="text-3xl font-bold mb-6 text-amber-300 border-b-2 border-amber-400 pb-2 tracking-wide">
                  {group.name}
                </h2>

                <p className="mb-4 text-zinc-400 italic text-sm">
                  Clasament sortat după puncte și diferență de goluri
                </p>

                {/* Table */}
                <table className="w-full mb-8 text-left rounded-lg overflow-hidden shadow-md border border-zinc-700">
                  <thead className="bg-amber-600/30 text-amber-100">
                    <tr>
                      <th className="p-3">Echipa</th>
                      <th className="p-3 text-center">P</th>
                      <th className="p-3 text-center">J</th>
                      <th className="p-3 text-center">V</th>
                      <th className="p-3 text-center">E</th>
                      <th className="p-3 text-center">Î</th>
                      <th className="p-3 text-center">GM</th>
                      <th className="p-3 text-center">GP</th>
                      <th className="p-3 text-center">GD</th>
                    </tr>
                  </thead>
                  <tbody className="bg-zinc-800">
                    {sortTeams(group.teams).map((team) => {
                      const gd = team.gf - team.ga;
                      return (
                        <tr
                          key={team.id}
                          className="border-b border-zinc-700 hover:bg-zinc-700 transition"
                        >
                          <td className="p-3 font-semibold flex items-center space-x-3">
                            <img
                              src={team.logo}
                              alt={team.name}
                              className="w-8 h-8 object-contain rounded"
                            />
                            <span>{team.name}</span>
                          </td>
                          <td className="p-3 text-center">{team.points}</td>
                          <td className="p-3 text-center">{team.played}</td>
                          <td className="p-3 text-center">{team.won}</td>
                          <td className="p-3 text-center">{team.drawn}</td>
                          <td className="p-3 text-center">{team.lost}</td>
                          <td className="p-3 text-center">{team.gf}</td>
                          <td className="p-3 text-center">{team.ga}</td>
                          <td
                            className={`p-3 text-center font-bold ${
                              gd > 0
                                ? "text-green-400"
                                : gd < 0
                                ? "text-red-400"
                                : "text-zinc-300"
                            }`}
                          >
                            {gd}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {/* Fixtures */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-amber-300 tracking-wide">
                    Meciuri
                  </h3>
                  <ul className="space-y-3">
                    {group.fixtures.map(({ date, time, home, away, score }, idx) => {
                      const homeTeam = group.teams.find((t) => t.name === home);
                      const awayTeam = group.teams.find((t) => t.name === away);
                      return (
                        <li
                          key={idx}
                          className="grid grid-cols-[140px_1fr_30px_1fr_60px] items-center bg-zinc-800 rounded p-4 shadow hover:bg-zinc-700 transition"
                        >
                          <div className="text-sm text-zinc-400">
                            {new Date(date).toLocaleDateString("ro-RO")} {time}
                          </div>
                          <div className="flex items-center space-x-2 font-semibold text-lg text-amber-300 justify-end">
                            <img src={homeTeam?.logo} alt={home} className="w-6 h-6 object-contain rounded" />
                            <span>{home}</span>
                          </div>
                          <div className="text-center text-zinc-400 font-semibold">vs</div>
                          <div className="flex items-center space-x-2 font-semibold text-lg text-amber-300 justify-start">
                            <span>{away}</span>
                            <img src={awayTeam?.logo} alt={away} className="w-6 h-6 object-contain rounded" />
                          </div>
                          <div className="text-lg font-bold text-amber-400 text-center">{score || "–"}</div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </section>
            ))}
          </>
        )}

        {activeTab === "marcatori" && (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-amber-300 border-b-2 border-amber-400 pb-2 mb-6 tracking-wide">
              Marcatori
            </h2>
            <ul className="divide-y divide-zinc-700">
              {topScorers.map((scorer) => (
                <li key={scorer.id} className="flex items-center justify-between p-4 bg-zinc-800 rounded">
                  <div className="flex items-center space-x-4">
                    <img src={scorer.team_logo} alt={scorer.name} className="w-10 h-10 rounded-full" />
                    <span className="font-semibold text-lg text-white">{scorer.name}</span>
                  </div>
                  <div className="text-amber-400 text-xl font-bold">{scorer.goals}</div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "playoff" && (
          <div className="text-center py-20 text-zinc-400 italic text-xl">
            Etapele Play-Off vor fi determinate.
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
