import { Link } from "react-router-dom";
import { Sparkles, Twitter, Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Features", path: "/" },
      { name: "AI Agents", path: "/agents" },
      { name: "Pricing", path: "/pricing" },
      { name: "Documentation", path: "#" },
    ],
    Company: [
      { name: "About", path: "/about" },
      { name: "Blog", path: "#" },
      { name: "Careers", path: "#" },
      { name: "Contact", path: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", path: "#" },
      { name: "Terms of Service", path: "#" },
      { name: "Cookie Policy", path: "#" },
      { name: "Licenses", path: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="relative border-t border-white/10 mt-20">
      <div className="absolute inset-0 glow-primary opacity-5" />
      
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-background" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Agentium
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4 max-w-sm">
              Empower your business with AI automation agents. Deploy intelligent workflows in minutes, not months.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-foreground">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Agentium. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with ❤️ for the future of automation
          </p>
        </div>
      </div>
    </footer>
  );
};
