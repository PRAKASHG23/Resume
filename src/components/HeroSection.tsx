import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-gradient">
              Prakash Kumar Gupta
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            BTech CSE AIML Student & Web Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about AI/ML technologies, web development, and creating innovative solutions 
            with Python and modern tech stack.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient text-white hover:opacity-90 transition-smooth glow">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            Download Resume
          </Button>
        </div>

        <div className="flex gap-6 justify-center mb-16">
          <a 
            href="mailto:prakash@example.com" 
            className="p-3 rounded-full border border-border hover:bg-accent/20 transition-smooth"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:bg-accent/20 transition-smooth"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:bg-accent/20 transition-smooth"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;