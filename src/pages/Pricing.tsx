import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: Sparkles,
      price: "49",
      description: "Perfect for individuals and small projects",
      features: [
        "3 AI Agents",
        "10,000 automations/month",
        "Basic analytics",
        "Email support",
        "API access",
      ],
      gradient: "primary",
      popular: false,
    },
    {
      name: "Professional",
      icon: Zap,
      price: "149",
      description: "Ideal for growing businesses",
      features: [
        "15 AI Agents",
        "100,000 automations/month",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations",
        "Team collaboration",
      ],
      gradient: "secondary",
      popular: true,
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      description: "For large-scale operations",
      features: [
        "Unlimited AI Agents",
        "Unlimited automations",
        "Enterprise analytics",
        "24/7 dedicated support",
        "API access",
        "Custom integrations",
        "Team collaboration",
        "SLA guarantee",
        "Custom AI training",
      ],
      gradient: "accent",
      popular: false,
    },
  ];

  const gradientClasses = {
    primary: "gradient-primary",
    secondary: "gradient-secondary",
    accent: "gradient-accent",
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock the power of AI automation with flexible pricing designed for every stage of your journey
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-background text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl ${gradientClasses[plan.gradient]} flex items-center justify-center mb-4`}>
                <plan.icon className="w-7 h-7 text-background" />
              </div>

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">
                  {plan.price === "Custom" ? plan.price : `$${plan.price}`}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-muted-foreground">/month</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "neon" : "glass"}
                className="w-full"
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>

        {/* Premium Features */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">All Plans Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
            {[
              "99.9% Uptime SLA",
              "Data Encryption",
              "Regular Updates",
              "Community Access",
            ].map((feature, i) => (
              <div key={i} className="glass-card rounded-xl p-6 hover:scale-105 transition-transform">
                <Check className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
