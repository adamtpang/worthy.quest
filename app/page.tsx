"use client";

import { useState } from "react";
import Script from "next/script";
import { BOOKS } from "@/data/books";
import { MoveRight, Star, Compass, User, Map as MapIcon, Library, Sparkles, Building2, CheckCircle2 } from "lucide-react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("quest");
  const [sortingContext, setSortingContext] = useState("");
  const [sortedClass, setSortedClass] = useState<string | null>(null);

  const switchTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleSort = () => {
    // Mock AI analysis
    setTimeout(() => {
        const classes = ["Paladin of Engineering", "Techno-Optimist Cartographer", "Grand Architect", "Systems Healer"];
        const randomClass = classes[Math.floor(Math.random() * classes.length)];
        setSortedClass(randomClass);
    }, 1000);
  };

  // Companies "Living Proof" sample
  const PROOF_COMPANIES = [
    { name: "Tesla", problem: "Energy & Climate", value: "$800B+", solution: "Electric Vehicles & Solar" },
    { name: "SpaceX", problem: "Single-Planet Risk", value: "$180B+", solution: "Reusable Rockets" },
    { name: "NVIDIA", problem: "Compute Scarcity", value: "$2T+", solution: "GPU / AI Chips" },
    { name: "Moderna", problem: "Disease Response", value: "$40B+", solution: "mRNA Platform" },
    { name: "Intuitive Surgical", problem: "Surgical Error", value: "$140B+", solution: "Robotic Surgery" },
  ];

  return (
    <>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />

      <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
        {/* Top Header */}
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-100 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Compass className="w-8 h-8 text-black" strokeWidth={1.5} />
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                The Main Quest
              </h1>
            </div>
            <p className="text-gray-500 font-medium">The Operating System for the Moral Entrepreneur.</p>
          </div>
          
          <div className="flex gap-4">
             <div className="text-right hidden md:block">
                <div className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-1">Current Focus</div>
                <div className="text-sm font-semibold">Mapping The Infinite Game</div>
             </div>
             <button className="bg-black text-white px-5 py-2 rounded-full font-medium text-sm hover:opacity-80 transition-opacity">
                Join the Guild
             </button>
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Navigation */}
          <nav className="lg:col-span-3 space-y-2">
            <button
              onClick={() => switchTab("quest")}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium flex items-center gap-3 transition-colors ${activeTab === "quest" ? "bg-gray-100 text-black" : "text-gray-500 hover:text-black hover:bg-gray-50"}`}
            >
              <MapIcon className="w-4 h-4" />
              <span>Quest Log</span>
            </button>
            <button
              onClick={() => switchTab("companies")}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium flex items-center gap-3 transition-colors ${activeTab === "companies" ? "bg-gray-100 text-black" : "text-gray-500 hover:text-black hover:bg-gray-50"}`}
            >
              <Building2 className="w-4 h-4" />
              <span>Living Proof</span>
            </button>
            <button
              onClick={() => switchTab("library")}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium flex items-center gap-3 transition-colors ${activeTab === "library" ? "bg-gray-100 text-black" : "text-gray-500 hover:text-black hover:bg-gray-50"}`}
            >
              <Library className="w-4 h-4" />
              <span>The Archives</span>
            </button>
            <button
              onClick={() => switchTab("sorting")}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium flex items-center gap-3 transition-colors ${activeTab === "sorting" ? "bg-gray-100 text-black" : "text-gray-500 hover:text-black hover:bg-gray-50"}`}
            >
              <Sparkles className="w-4 h-4" />
              <span>AI Sorting Hat</span>
            </button>

            {/* Status Card */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">A</div>
                    <div>
                        <div className="text-sm font-bold">Adam</div>
                        <div className="text-xs text-gray-500">Lvl 25 • Builder</div>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full w-[25%]"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>Progress</span>
                        <span>25%</span>
                    </div>
                </div>
            </div>
          </nav>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
            
            {/* VIEW: QUEST LOG (Thesis) */}
            {activeTab === "quest" && (
              <div className="animate-fade-in space-y-12">
                <div className="prose prose-lg">
                    <h2 className="text-2xl font-bold mb-4">The Victory Path</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        To save the world, we must systematize the production of "Good Quests". 
                        We move from vague aspirations to concrete engineering through the <strong>5-Step Framework</strong>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {["Problem", "Team", "Solution", "Leads", "Offers"].map((step, i) => (
                        <div key={step} className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group cursor-pointer">
                            <div className="text-xs font-mono text-gray-400 mb-2">STEP 0{i+1}</div>
                            <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">{step}</h3>
                            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-500">
                                View Playbook <MoveRight className="w-3 h-3 inline ml-1" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <h3 className="text-xl font-bold mb-6">Current Campaign: The Foundation</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Map the Territory</h4>
                                <p className="text-sm text-gray-600 mt-1">Aggregate core texts and mental models. (Completed: The Archives)</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                            </div>
                            <div>
                                <h4 className="font-semibold">Recruit the Guild</h4>
                                <p className="text-sm text-gray-600 mt-1">Find 10 high-agency peers ("Base Stat 600") to join the network.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                            </div>
                            <div>
                                <h4 className="font-semibold">Launch "Humanity Scorecard"</h4>
                                <p className="text-sm text-gray-600 mt-1">Visualize the top 100 problems vs. the companies solving them.</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            )}

            {/* VIEW: LIVING PROOF */}
            {activeTab === "companies" && (
              <div className="animate-fade-in">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Living Proof</h2>
                    <p className="text-gray-600">
                        Evidence that technology businesses are the scalable solution to human suffering. 
                        Market cap is a proxy for value delivered to fellow humans.
                    </p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="p-4 font-semibold text-gray-500">Company</th>
                                <th className="p-4 font-semibold text-gray-500">Human Problem Solved</th>
                                <th className="p-4 font-semibold text-gray-500">Tech Solution</th>
                                <th className="p-4 font-semibold text-gray-500 text-right">Value (Proof)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {PROOF_COMPANIES.map((c) => (
                                <tr key={c.name} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-bold">{c.name}</td>
                                    <td className="p-4 text-gray-600">
                                        <span className="bg-red-50 text-red-700 px-2 py-1 rounded-md text-xs font-medium border border-red-100">
                                            {c.problem}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-600">{c.solution}</td>
                                    <td className="p-4 text-right font-mono text-gray-500">{c.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="p-4 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-400">
                        Showing 5 of 500+ tracked entities from local database.
                    </div>
                </div>
              </div>
            )}

            {/* VIEW: ARCHIVES */}
            {activeTab === "library" && (
              <div className="animate-fade-in">
                 <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">The Archives</h2>
                    <p className="text-gray-600">Essential downloads for your mental operating system.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {BOOKS.map((book) => (
                    <div key={book.id} className="p-6 bg-white rounded-xl border border-gray-200 hover:border-black hover:shadow-lg transition-all group">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">{book.title}</h3>
                            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 border border-gray-200 px-2 py-1 rounded">{book.category}</span>
                        </div>
                        <p className="text-sm font-medium text-gray-900 mb-2">{book.author}</p>
                        <p className="text-sm text-gray-500 mb-4 leading-relaxed">{book.description}</p>
                        
                        <div className="pt-4 border-t border-gray-100">
                            <div className="text-xs font-bold text-gray-400 mb-1">80/20 INSIGHT</div>
                            <p className="text-sm text-green-700 bg-green-50 p-2 rounded border border-green-100 italic">
                                "{book.whyItMatters}"
                            </p>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW: SORTING HAT */}
            {activeTab === "sorting" && (
                <div className="animate-fade-in max-w-2xl mx-auto text-center pt-8">
                    <div className="mb-8">
                        <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                            <Sparkles className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold mb-3">The Sorting Hat</h2>
                        <p className="text-gray-600">
                            The Infinite Game requires many classes. Where do you fit?<br/>
                            Paste your context (bio, goals, GitHub, LinkedIn) below.
                        </p>
                    </div>

                    {!sortedClass ? (
                        <div className="bg-white p-2 rounded-2xl border border-gray-200 shadow-sm focus-within:ring-2 ring-blue-500 transition-shadow">
                            <textarea 
                                className="w-full h-32 p-4 outline-none resize-none text-gray-700 bg-transparent"
                                placeholder="I am a software engineer obsessed with clean energy..."
                                value={sortingContext}
                                onChange={(e) => setSortingContext(e.target.value)}
                            />
                            <div className="flex justify-between items-center px-4 pb-2">
                                <span className="text-xs text-gray-400 font-medium">AI Analysis v1.0</span>
                                <button 
                                    onClick={handleSort}
                                    className="bg-black text-white px-6 py-2 rounded-xl font-bold hover:scale-105 transition-transform"
                                >
                                    Sort Me
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-black text-white p-8 rounded-2xl shadow-2xl animate-fade-in">
                            <div className="text-sm text-gray-400 uppercase tracking-widest mb-2">You belong to the order of</div>
                            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
                                {sortedClass}
                            </div>
                            <div className="text-gray-300 text-sm leading-relaxed mb-6">
                                "Your unique combination of technical leverage and moral urgency makes you perfectly suited for this role. The Guild needs your ability to translate abstract problems into concrete engineering specs."
                            </div>
                            <button 
                                onClick={() => setSortedClass(null)}
                                className="text-xs text-gray-500 hover:text-white underline"
                            >
                                Run Simulation Again
                            </button>
                        </div>
                    )}
                </div>
            )}

          </div>
        </main>
      </div>
    </>
  );
}
