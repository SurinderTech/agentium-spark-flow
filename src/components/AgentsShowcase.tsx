import { AgentCard } from "./AgentCard";
import { Briefcase, ShoppingCart, MessageSquare, Mail, Calendar, UserCheck } from "lucide-react";

export const AgentsShowcase = () => {
  const agents = [
    {
      icon: Briefcase,
      title: "Job Finder Agent",
      description: "Automate your job search with AI-powered matching and applications",
      features: ["Multi-platform job scanning", "AI-powered matching", "Auto-apply to positions"],
      gradient: "primary" as const,
      agentId: "job-finder",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Assistant",
      description: "Manage inventory, orders, and customer support automatically",
      features: ["Inventory management", "Order processing", "Customer support automation"],
      gradient: "secondary" as const,
      agentId: "ecommerce",
    },
    {
      icon: Mail,
      title: "Email Assistant",
      description: "Smart email management with automated responses and categorization",
      features: ["Smart inbox sorting", "Automated responses", "Priority detection"],
      gradient: "accent" as const,
      agentId: "email-assistant",
    },
    {
      icon: MessageSquare,
      title: "Social Media Manager",
      description: "Automate posting, engagement, and analytics across platforms",
      features: ["Multi-platform posting", "Engagement automation", "Analytics tracking"],
      gradient: "primary" as const,
      agentId: "social-media",
    },
    {
      icon: Calendar,
      title: "Smart Scheduler",
      description: "Intelligent meeting and task scheduling with conflict resolution",
      features: ["Auto-scheduling", "Conflict resolution", "Calendar optimization"],
      gradient: "secondary" as const,
      agentId: "scheduler",
    },
    {
      icon: UserCheck,
      title: "Recruitment Agent",
      description: "Streamline hiring with automated candidate screening and outreach",
      features: ["Resume screening", "Automated outreach", "Interview scheduling"],
      gradient: "accent" as const,
      agentId: "recruitment",
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
