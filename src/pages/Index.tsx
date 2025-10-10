import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Hero } from "@/components/Hero";
import { AgentsShowcase } from "@/components/AgentsShowcase";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Hero />
      <AgentsShowcase />
      <Features />
      <CTA />
    </div>
  );
};

export default Index;
