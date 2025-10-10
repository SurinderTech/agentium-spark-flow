import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AgentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: "primary" | "secondary" | "accent";
  agentId: string;
}

export const AgentCard = ({ icon: Icon, title, description, features, gradient, agentId }: AgentCardProps) => {
  const navigate = useNavigate();
  
  const gradientClasses = {
    primary: "gradient-primary",
    secondary: "gradient-secondary",
    accent: "gradient-accent",
  };

  const glowClasses = {
    primary: "glow-primary",
    secondary: "glow-secondary",
    accent: "glow-accent",
  };

  const handleClick = () => {
    navigate(`/agent/${agentId}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="group relative glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 ${glowClasses[gradient]} opacity-0 group-hover:opacity-50 rounded-2xl transition-opacity duration-300 -z-10`} />
      
      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl ${gradientClasses[gradient]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7 text-background" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-4 text-sm">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button variant="ghost" className="w-full group-hover:bg-primary/10 group-hover:text-primary">
        Customize & Deploy
      </Button>
    </div>
  );
};
