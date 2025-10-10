import { Button } from "@/components/ui/button";
import { Sparkles, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background -z-5" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Animated badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary animate-glow-pulse" />
          <span className="text-sm text-muted-foreground">Powered by Advanced AI</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="gradient-primary bg-clip-text text-transparent">
            Automate Everything
          </span>
          <br />
          with AI Agents
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Deploy powerful AI agents that work 24/7. From job hunting to e-commerce automation,
          let intelligent agents handle your repetitive tasks.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="lg" className="group">
            <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Start Automating
          </Button>
          <Button variant="glass" size="lg">
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-primary bg-clip-text text-transparent">50K+</div>
            <div className="text-sm text-muted-foreground mt-2">Active Agents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-secondary bg-clip-text text-transparent">99.9%</div>
            <div className="text-sm text-muted-foreground mt-2">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-accent bg-clip-text text-transparent">24/7</div>
            <div className="text-sm text-muted-foreground mt-2">Availability</div>
          </div>
        </div>
      </div>
    </section>
  );
};
