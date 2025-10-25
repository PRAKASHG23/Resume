import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/prakash-profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-6xl mx-auto animate-fade-in">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="text-gradient">
                  Prakash Kumar Gupta
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-2">
                BTech CSE AIML Student & Web Developer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl lg:max-w-none">
                Passionate about AI/ML technologies, web development, and creating innovative solutions 
                with Python and modern tech stack.
              </p>
            </div>


            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button size="lg" className="bg-gradient text-white hover:opacity-90 transition-smooth glow">
                View My Work
              </Button>
              <a href="Prakash resume.pdf" download>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                Download Resume
              </Button>
              </a>
              
            </div>

            <div className="flex gap-6 justify-center lg:justify-start mb-16">
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

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient rounded-full blur-2xl opacity-30 scale-110"></div>
              <img 
                src={profileImage} 
                alt="Prakash Kumar Gupta - Profile" 
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-border/50 shadow-2xl hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;