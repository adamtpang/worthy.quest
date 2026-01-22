"use client";

import { useState } from "react";
import { BOOKS } from "@/data/books";
import COMPANIES from "@/data/companies.json";
import { PLAYER_STATS } from "@/data/player";
import { 
  MoveRight, 
  Compass, 
  Map as MapIcon, 
  Library, 
  Sparkles, 
  Building2, 
  CheckCircle2, 
  Target, 
  Zap, 
  Heart,
  Trophy,
  ArrowUpRight,
  Search
} from "lucide-react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("quest");
  const [sortingContext, setSortingContext] = useState("");
  const [sortedClass, setSortedClass] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const switchTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleSort = () => {
    setSortedClass(null);
    const context = sortingContext.toLowerCase();
    
    setTimeout(() => {
        let assigned = "The Unsorted";
        
        if (context.includes("code") || context.includes("engineer") || context.includes("build")) {
          assigned = "Paladin of Engineering";
        } else if (context.includes("design") || context.includes("map") || context.includes("cartography")) {
          assigned = "Techno-Optimist Cartographer";
        } else if (context.includes("system") || context.includes("architecture") || context.includes("scale")) {
          assigned = "Grand Architect";
        } else if (context.includes("philosophy") || context.includes("meaning") || context.includes("rational")) {
          assigned = "Epistemological Knight";
        } else {
          assigned = "Infinite Player (Generalist)";
        }
        
        setSortedClass(assigned);
    }, 1500);
  };

  const filteredCompanies = COMPANIES.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.ticker.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 50); // Show top 50 for performance

  const LEADS = [
    { name: "Logan Chipkin", role: "Critical Rationalist / Writer", status: "Outreach Sent", type: "Fellowship" },
    { name: "Conjecture Institute", role: "AI Alignment / Philosophy", status: "Researching", type: "Grant" },
    { name: "Founders Fund", role: "Venture Capital", status: "Dream Lead", type: "Investment" },
  ];

  return (
    <div className="min-h-screen bg-white text-black antialiased font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white">
                <Compass className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight">The Main Quest</h1>
            </div>
            <p className="text-gray-500 text-lg">Designing the Infinite Game of Love and Play.</p>
          </div>
          
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-black transition-colors">
              Docs
            </button>
            <button className="px-5 py-2 text-sm font-bold bg-black text-white rounded-full hover:bg-gray-800 transition-all">
              Join the Guild
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-8">
            <nav className="space-y-1">
              {[
                { id: "quest", label: "Quest Log", icon: MapIcon },
                { id: "companies", label: "Living Proof", icon: Building2 },
                { id: "library", label: "The Archives", icon: Library },
                { id: "sorting", label: "Sorting Hat", icon: Sparkles },
                { id: "crm", label: "Leads & Offers", icon: Target },
                { id: "stats", label: "Player Stats", icon: Trophy },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => switchTab(item.id)}
                  className={`nav-item w-full ${activeTab === item.id ? "nav-item-active" : ""}`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold">{PLAYER_STATS.name[0]}</div>
                <div>
                  <div className="text-sm font-bold">{PLAYER_STATS.name}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{PLAYER_STATS.title}</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold text-gray-400">
                  <span>LEVEL {PLAYER_STATS.level}</span>
                  <span>{PLAYER_STATS.xp} / {PLAYER_STATS.maxXp} XP</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${(PLAYER_STATS.xp / PLAYER_STATS.maxXp) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9">
            
            {/* QUEST LOG */}
            {activeTab === "quest" && (
              <div className="animate-fade-in space-y-16">
                <section className="max-w-2xl">
                  <h2 className="text-3xl font-bold mb-6 italic font-serif">&quot;Identify the problem to fall in love with.&quot;</h2>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    The Infinite Game isn&apos;t about winning; it&apos;s about keeping the game in play. 
                    We route human attention to S-tier problems and the people solving them.
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card p-8 space-y-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-black" />
                    </div>
                    <h3 className="text-xl font-bold">The Deconstruction</h3>
                    <p className="text-sm text-gray-500">How do we distinguish between problems that matter and those that don&apos;t? We use the 80/20 principle and Critical Rationalism.</p>
                  </div>
                  <div className="card p-8 space-y-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-black" />
                    </div>
                    <h3 className="text-xl font-bold">Love & Play</h3>
                    <p className="text-sm text-gray-500">Your calling is an addiction to a specific puzzle. It should feel like an open field at Adelup—boundless, exciting, and necessary.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">The Playbook Framework</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                    {["Problem", "Team", "Solution", "Leads", "Offers"].map((step, i) => (
                      <div key={step} className="card p-4 text-center group cursor-pointer hover:bg-black hover:text-white transition-all">
                        <div className="text-[10px] font-bold opacity-50 mb-1">STEP 0{i+1}</div>
                        <div className="font-bold">{step}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card p-8 bg-gray-50 border-none">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold">Active Campaign: Tech Career Arc</h3>
                    <span className="badge badge-blue">In Progress</span>
                  </div>
                  <ul className="space-y-4">
                    {PLAYER_STATS.campaigns.map((task, i) => (
                      <li key={i} className="flex items-center gap-4 text-sm font-medium">
                        {task.done ? <CheckCircle2 className="w-5 h-5 text-black" /> : <div className="w-5 h-5 rounded-full border-2 border-gray-200" />}
                        <span className={task.done ? "text-gray-400 line-through" : ""}>{task.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* LIVING PROOF */}
            {activeTab === "companies" && (
              <div className="animate-fade-in space-y-8">
                <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Living Proof</h2>
                    <p className="text-gray-500 max-w-xl">
                      Market capitalization is proof of value delivered to fellow humans. 
                      These entities are deconstructions of major problems turned into functional solutions.
                    </p>
                  </div>
                  <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search companies..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm outline-none focus:border-black transition-all"
                    />
                  </div>
                </section>

                <div className="card overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-gray-50 text-gray-400 text-[10px] uppercase font-bold tracking-widest">
                        <th className="px-6 py-4">Company</th>
                        <th className="px-6 py-4">Context</th>
                        <th className="px-6 py-4 text-right">Value (Cap)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {filteredCompanies.map((c) => (
                        <tr key={c.slug} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-6">
                            <div className="font-bold text-base">{c.name}</div>
                            <div className="text-[10px] text-gray-400 font-bold">{c.ticker}</div>
                          </td>
                          <td className="px-6 py-6 text-gray-600 text-xs leading-relaxed max-w-md">
                            {c.description}
                          </td>
                          <td className="px-6 py-6 text-right font-bold text-gray-900">{c.marketCap}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {filteredCompanies.length === 0 && (
                    <div className="p-12 text-center text-gray-400">
                      No companies found matching your search.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* CRM */}
            {activeTab === "crm" && (
              <div className="animate-fade-in space-y-8">
                <h2 className="text-3xl font-bold mb-8">Leads & Offers</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="card p-6 bg-blue-50 border-none">
                    <div className="text-xs font-bold text-blue-400 uppercase mb-2">Active Leads</div>
                    <div className="text-3xl font-bold">12</div>
                  </div>
                  <div className="card p-6 bg-green-50 border-none">
                    <div className="text-xs font-bold text-green-400 uppercase mb-2">Offers Sent</div>
                    <div className="text-3xl font-bold">3</div>
                  </div>
                  <div className="card p-6 bg-purple-50 border-none">
                    <div className="text-xs font-bold text-purple-400 uppercase mb-2">Interviews</div>
                    <div className="text-3xl font-bold">1</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pipeline</h3>
                  <div className="space-y-2">
                    {LEADS.map((lead) => (
                      <div key={lead.name} className="card p-4 flex items-center justify-between">
                        <div>
                          <div className="font-bold">{lead.name}</div>
                          <div className="text-xs text-gray-400">{lead.role}</div>
                        </div>
                        <div className="flex items-center gap-6">
                          <span className="text-[10px] font-bold text-gray-400">{lead.type}</span>
                          <span className="badge badge-blue text-[10px]">{lead.status}</span>
                          <MoveRight className="w-4 h-4 text-gray-300" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PLAYER STATS */}
            {activeTab === "stats" && (
              <div className="animate-fade-in space-y-12">
                <section>
                  <h2 className="text-3xl font-bold mb-2">Productize Yourself</h2>
                  <p className="text-gray-500">Mapping your leverage across Code, Media, Capital, and Labor.</p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="card p-8">
                    <h3 className="text-lg font-bold mb-6">Leverage Mix</h3>
                    <div className="space-y-6">
                      {PLAYER_STATS.leverage.map((stat) => (
                        <div key={stat.label} className="space-y-2">
                          <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                            <span>{stat.label}</span>
                            <span>{stat.val}%</span>
                          </div>
                          <div className="progress-bar">
                            <div className={`${stat.color} h-full`} style={{ width: `${stat.val}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="card p-6 border-black bg-black text-white">
                      <h3 className="font-bold mb-4">Current Main Quest</h3>
                      <p className="text-sm text-gray-300 leading-relaxed mb-6">
                        {PLAYER_STATS.mainQuest}
                      </p>
                      <button className="flex items-center gap-2 text-xs font-bold hover:gap-3 transition-all">
                        View Detailed Roadmap <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                    
                    <div className="card p-6">
                      <h3 className="font-bold mb-4">Recent Loot</h3>
                      <div className="space-y-3">
                        {PLAYER_STATS.loot.map((item, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm">
                            <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                            <span>{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LIBRARY */}
            {activeTab === "library" && (
              <div className="animate-fade-in space-y-12">
                <h2 className="text-3xl font-bold">The Archives</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {BOOKS.map((book) => (
                    <div key={book.id} className="group">
                      <div className="mb-4 aspect-[4/5] bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 group-hover:border-black transition-all">
                        <Library className="w-12 h-12 text-gray-200 group-hover:text-black transition-all" />
                      </div>
                      <h3 className="font-bold mb-1">{book.title}</h3>
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-3">{book.author}</div>
                      <p className="text-sm text-gray-500 line-clamp-2">{book.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SORTING HAT */}
            {activeTab === "sorting" && (
              <div className="animate-fade-in max-w-xl mx-auto py-12 text-center">
                {!sortedClass ? (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-4xl font-bold mb-4 font-serif italic">What is your fittedness?</h2>
                      <p className="text-gray-500">The sorting hat analyzes your professional and personal context to determine your class in the Infinite Game.</p>
                    </div>
                    <div className="card p-2 border-2 focus-within:border-black transition-all">
                      <textarea 
                        className="w-full h-40 p-6 outline-none resize-none text-lg"
                        placeholder="I&apos;m a self-taught engineer who loves solving hard problems..."
                        value={sortingContext}
                        onChange={(e) => setSortingContext(e.target.value)}
                      />
                      <div className="flex justify-between items-center p-4">
                        <span className="text-[10px] font-bold text-gray-300 tracking-widest uppercase">AI Analysis Engine v1.0</span>
                        <button 
                          onClick={handleSort}
                          className="bg-black text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-all"
                        >
                          Deconstruct Me
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-8 animate-fade-in">
                    <div className="w-24 h-24 bg-black text-white rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                      <Sparkles className="w-12 h-12" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Your Assigned Class</div>
                      <h2 className="text-5xl font-bold mb-6">{sortedClass}</h2>
                      <div className="max-w-md mx-auto text-gray-500 leading-relaxed mb-8">
                        Based on your profile, you are most suited for high-leverage architectural roles. You thrive when translating ambiguous human suffering into concrete technical solutions.
                      </div>
                      <div className="flex justify-center gap-4">
                        <button className="px-6 py-3 rounded-full border border-gray-200 font-bold hover:bg-gray-50 transition-all">
                          View Class Guide
                        </button>
                        <button 
                          onClick={() => setSortedClass(null)}
                          className="px-6 py-3 rounded-full bg-black text-white font-bold hover:opacity-80 transition-all"
                        >
                          Reset Simulation
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
}