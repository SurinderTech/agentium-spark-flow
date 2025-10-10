import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";
import { Briefcase, ShoppingCart, Mail, MessageSquare, Calendar, UserCheck, ArrowLeft, Check, Settings, Play } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const agentData = {
  "job-finder": {
    icon: Briefcase,
    title: "Job Finder Agent",
    description: "Automate your job search with AI-powered matching and applications",
    gradient: "primary",
    fullDescription: "The Job Finder Agent continuously scans job boards, company websites, and professional networks to find opportunities that match your profile. It analyzes job descriptions, filters by your preferences, and can even submit applications on your behalf.",
    features: [
      "Multi-platform job scanning",
      "AI-powered job matching",
      "Automated application submission",
      "Interview scheduling",
      "Salary negotiation insights",
      "Real-time notifications",
    ],
    useCases: [
      "Find remote developer positions",
      "Track startup job openings",
      "Monitor specific companies",
      "Get alerts for urgent roles",
    ],
    pricing: { starter: true, professional: true, enterprise: true },
  },
  "ecommerce": {
    icon: ShoppingCart,
    title: "E-commerce Assistant",
    description: "Manage inventory, orders, and customer support automatically",
    gradient: "secondary",
    fullDescription: "Transform your online store with intelligent automation. This agent handles inventory management, order processing, customer inquiries, and even provides personalized product recommendations.",
    features: [
      "Inventory tracking & alerts",
      "Order processing automation",
      "24/7 customer support chatbot",
      "Product recommendation engine",
      "Return handling",
      "Sales analytics",
    ],
    useCases: [
      "Auto-restock popular items",
      "Handle customer FAQs",
      "Process refunds automatically",
      "Send personalized offers",
    ],
    pricing: { starter: false, professional: true, enterprise: true },
  },
  "email-assistant": {
    icon: Mail,
    title: "Email Assistant",
    description: "Smart email management with automated responses and categorization",
    gradient: "accent",
    fullDescription: "Never miss an important email again. This agent prioritizes your inbox, drafts responses, schedules follow-ups, and even detects urgent matters that need immediate attention.",
    features: [
      "Smart inbox prioritization",
      "Automated response drafting",
      "Email categorization",
      "Follow-up scheduling",
      "Spam detection",
      "Meeting extraction",
    ],
    useCases: [
      "Auto-reply to common queries",
      "Schedule meetings from emails",
      "Filter important messages",
      "Draft professional responses",
    ],
    pricing: { starter: true, professional: true, enterprise: true },
  },
  "social-media": {
    icon: MessageSquare,
    title: "Social Media Manager",
    description: "Automate posting, engagement, and analytics across platforms",
    gradient: "primary",
    fullDescription: "Maintain a strong social media presence without the constant effort. This agent schedules posts, responds to comments, analyzes engagement, and even suggests content ideas.",
    features: [
      "Multi-platform posting",
      "Engagement automation",
      "Content scheduling",
      "Analytics & insights",
      "Hashtag optimization",
      "Competitor monitoring",
    ],
    useCases: [
      "Schedule weekly content",
      "Auto-respond to mentions",
      "Track brand sentiment",
      "Analyze best posting times",
    ],
    pricing: { starter: true, professional: true, enterprise: true },
  },
  "scheduler": {
    icon: Calendar,
    title: "Smart Scheduler",
    description: "Intelligent meeting and task scheduling with conflict resolution",
    gradient: "secondary",
    fullDescription: "Optimize your time with AI-powered scheduling. This agent finds the best meeting times, avoids conflicts, manages your calendar, and even reschedules when priorities change.",
    features: [
      "Automatic conflict resolution",
      "Meeting optimization",
      "Multi-calendar sync",
      "Time zone handling",
      "Reminder automation",
      "Buffer time management",
    ],
    useCases: [
      "Find optimal meeting times",
      "Auto-reschedule conflicts",
      "Block focus time",
      "Coordinate team schedules",
    ],
    pricing: { starter: true, professional: true, enterprise: true },
  },
  "recruitment": {
    icon: UserCheck,
    title: "Recruitment Agent",
    description: "Streamline hiring with automated candidate screening and outreach",
    gradient: "accent",
    fullDescription: "Transform your recruitment process with AI. This agent screens resumes, schedules interviews, communicates with candidates, and provides data-driven hiring insights.",
    features: [
      "Resume screening & ranking",
      "Automated candidate outreach",
      "Interview scheduling",
      "Assessment management",
      "Candidate tracking",
      "Hiring analytics",
    ],
    useCases: [
      "Screen 100+ resumes instantly",
      "Schedule interview rounds",
      "Send automated updates",
      "Track candidate pipeline",
    ],
    pricing: { starter: false, professional: true, enterprise: true },
  },
};

const AgentDetail = () => {
  const { agentId } = useParams();
  const navigate = useNavigate();
  const agent = agentData[agentId as keyof typeof agentData];

  const [config, setConfig] = useState({
    frequency: [50],
    notifications: true,
    autoStart: false,
    apiKey: "",
  });

  if (!agent) {
    return <div>Agent not found</div>;
  }

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
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 hover:bg-primary/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-xl ${gradientClasses[agent.gradient]} flex items-center justify-center flex-shrink-0`}>
                  <agent.icon className="w-8 h-8 text-background" />
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl font-bold mb-3">{agent.title}</h1>
                  <p className="text-lg text-muted-foreground mb-4">{agent.description}</p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-primary/50 text-primary">AI-Powered</Badge>
                    <Badge variant="outline" className="border-secondary/50 text-secondary">Automated</Badge>
                    <Badge variant="outline" className="border-accent/50 text-accent">24/7 Active</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="glass-card rounded-2xl p-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4 mt-6">
                <p className="text-muted-foreground leading-relaxed">{agent.fullDescription}</p>
                <div className="pt-4">
                  <h3 className="font-semibold mb-3">What makes it special?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      Powered by latest AI models
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      Learns and improves over time
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      Easy integration with existing tools
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {agent.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="use-cases" className="mt-6">
                <div className="space-y-3">
                  {agent.useCases.map((useCase, i) => (
                    <div key={i} className="p-4 rounded-lg glass-card hover:scale-105 transition-transform">
                      <p className="text-sm">{useCase}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Configuration */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Configure Agent
              </h3>

              <div className="space-y-6">
                {/* Frequency */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">
                    Automation Frequency
                  </Label>
                  <Slider
                    value={config.frequency}
                    onValueChange={(value) => setConfig({ ...config, frequency: value })}
                    max={100}
                    step={1}
                    className="mb-2"
                  />
                  <p className="text-xs text-muted-foreground">
                    Checks every {config.frequency[0]} minutes
                  </p>
                </div>

                {/* Notifications */}
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications" className="text-sm font-medium">
                    Enable Notifications
                  </Label>
                  <Switch
                    id="notifications"
                    checked={config.notifications}
                    onCheckedChange={(checked) => setConfig({ ...config, notifications: checked })}
                  />
                </div>

                {/* Auto Start */}
                <div className="flex items-center justify-between">
                  <Label htmlFor="autostart" className="text-sm font-medium">
                    Auto-Start on Deploy
                  </Label>
                  <Switch
                    id="autostart"
                    checked={config.autoStart}
                    onCheckedChange={(checked) => setConfig({ ...config, autoStart: checked })}
                  />
                </div>

                {/* API Key */}
                <div>
                  <Label htmlFor="apikey" className="text-sm font-medium mb-2 block">
                    API Key (Optional)
                  </Label>
                  <Input
                    id="apikey"
                    type="password"
                    placeholder="Enter your API key"
                    value={config.apiKey}
                    onChange={(e) => setConfig({ ...config, apiKey: e.target.value })}
                  />
                </div>

                {/* Pricing Info */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-muted-foreground mb-2">Available on:</p>
                  <div className="flex gap-2">
                    {agent.pricing.starter && <Badge variant="outline" className="text-xs">Starter</Badge>}
                    {agent.pricing.professional && <Badge variant="outline" className="text-xs">Professional</Badge>}
                    {agent.pricing.enterprise && <Badge variant="outline" className="text-xs">Enterprise</Badge>}
                  </div>
                </div>

                {/* Deploy Button */}
                <Button variant="neon" className="w-full" size="lg">
                  <Play className="w-4 h-4 mr-2" />
                  Deploy Agent
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Deployment takes ~30 seconds. You can monitor progress in your dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AgentDetail;
