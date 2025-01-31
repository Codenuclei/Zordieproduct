import React from 'react';
import { Sparkles, Rocket, Users, Brain, ArrowRight } from 'lucide-react';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-violet-950 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-16">
        <div className="flex items-center space-x-2">
          <Brain className="w-8 h-8 text-violet-400" />
          <span className="text-xl font-bold">Zordie AI</span>
        </div>
        <button className="px-6 py-2 bg-violet-600 hover:bg-violet-700 rounded-lg font-semibold transition-colors">
          Get Started
        </button>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/10 mb-8">
          <Sparkles className="w-4 h-4 mr-2 text-violet-400" />
          <span className="text-violet-400 text-sm font-medium">Turn product ideas into concepts instantly with Zordie AI</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-300">
          UI design for disruptive product teams
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Collaborate in real-time with AI and your entire product team. In Upzone, everyone can contribute to building the next big thing!
        </p>
        <div className="flex justify-center gap-4">
          <button className="group px-8 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg font-semibold transition-colors inline-flex items-center">
            Find out more
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        <FeatureCard
          icon={<Rocket />}
          title="Generate prototypes"
          description="Create high-fidelity prototypes in seconds with AI assistance"
        />
        <FeatureCard
          icon={<Brain />}
          title="Modify any component"
          description="Customize and adapt components to match your exact needs"
        />
        <FeatureCard
          icon={<Users />}
          title="Real-time collaboration"
          description="Work together seamlessly with your entire product team"
        />
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 p-8 rounded-2xl bg-gradient-to-r from-violet-900/20 to-violet-950/20">
        <Stat number="10x" label="Faster prototyping" />
        <Stat number="100+" label="UI components" />
        <Stat number="50k+" label="Active users" />
        <Stat number="99%" label="Satisfaction rate" />
      </div>

      {/* Trusted By Section */}
      <div className="text-center">
        <p className="text-gray-400 text-sm mb-8">Trusted by leading companies worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" alt="Samsung" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="Uber" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" alt="Accenture" className="h-8" />
        </div>
      </div>
    </div>
  </div>
);
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
return (
  <div className="p-6 rounded-xl bg-white/5 hover:bg-violet-950/50 transition-colors">
    <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
      <div className="text-violet-400">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);
}

function Stat({ number, label }: { number: string; label: string }) {
return (
  <div className="text-center">
    <div className="text-3xl font-bold text-violet-400 mb-1">{number}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
);
}


export default Dashboard;