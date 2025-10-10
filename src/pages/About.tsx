import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sparkles, Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              About Agentium
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering businesses with intelligent AI automation
            </p>
          </div>

          {/* Mission */}
          <div className="glass-card rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <Target className="w-6 h-6 text-background" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              At Agentium, we believe that every business deserves access to powerful AI automation. 
              Our mission is to democratize AI technology, making it accessible, affordable, and easy to deploy 
              for businesses of all sizes. We're building the future where intelligent agents handle repetitive 
              tasks, allowing humans to focus on creativity and innovation.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: Sparkles,
                title: "Innovation",
                description: "Pushing the boundaries of what's possible with AI automation",
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Your success is our success. We're here to help you thrive",
              },
              {
                icon: Zap,
                title: "Simplicity",
                description: "Complex technology made simple and accessible for everyone",
              },
            ].map((value, i) => (
              <div key={i} className="glass-card rounded-xl p-6 hover:scale-105 transition-transform">
                <value.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Story */}
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2024, Agentium was born from a simple observation: businesses were spending 
              countless hours on repetitive tasks that could be automated. We saw an opportunity to 
              leverage cutting-edge AI technology to solve this problem at scale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we're proud to serve thousands of businesses worldwide, from startups to enterprises, 
              helping them automate workflows, boost productivity, and scale their operations with AI agents 
              that work 24/7. Our journey is just beginning, and we're excited to continue innovating and 
              building solutions that make a real difference.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
