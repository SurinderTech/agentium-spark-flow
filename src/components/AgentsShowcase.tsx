import { AgentCard } from "./AgentCard";
import { Briefcase, ShoppingCart, MessageSquare, TrendingUp, Mail, Calendar } from "lucide-react";

export const AgentsShowcase = () => {
  const agents = [
    {
      icon: Briefcase,
      title: "Job Hunter Agent",
      description: "Automatically finds and applies to jobs matching your profile across multiple platforms.",
      features: ["Auto-apply to jobs", "Resume optimization", "Interview scheduling"],
      gradient: "primary" as const,
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Assistant",
      description: "Manages your online store, handles customer inquiries, and optimizes pricing.",
      features: ["24/7 customer support", "Inventory management", "Smart pricing"],
      gradient: "secondary" as const,
    },
    {
      icon: MessageSquare,
      title: "Social Media Manager",
      description: "Creates, schedules, and publishes engaging content across all your social platforms.",
      features: ["Content generation", "Auto-scheduling", "Engagement tracking"],
      gradient: "accent" as const,
    },
    {
      icon: TrendingUp,
      title: "Market Analyst",
      description: "Monitors market trends, analyzes data, and provides actionable investment insights.",
      features: ["Real-time tracking", "Trend analysis", "Alert notifications"],
      gradient: "primary" as const,
    },
    {
      icon: Mail,
      title: "Email Automation",
      description: "Drafts, sends, and manages your emails with intelligent prioritization and responses.",
      features: ["Smart replies", "Email categorization", "Follow-up automation"],
      gradient: "secondary" as const,
    },
    {
      icon: Calendar,
      title: "Schedule Optimizer",
      description: "Manages your calendar, books meetings, and optimizes your daily schedule.",
      features: ["Auto-scheduling", "Meeting coordination", "Time blocking"],
      gradient: "accent" as const,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">
              AI Agents for Every Need
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our curated collection of intelligent agents, or customize your own
          </p>
        </div>

        {/* Agents grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <div
              key={agent.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AgentCard {...agent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
