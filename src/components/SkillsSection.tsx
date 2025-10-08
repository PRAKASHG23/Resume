import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Globe, 
  Brain, 
  Server, 
  Cpu 
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML5", "CSS", "JavaScript", "React",],
      gradient: "bg-gradient"
    },
    {
      title: "Programming",
      icon: Code2,
      skills: ["Python", "C++"],
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Database Management",
      icon: Database,
      skills: ["MySQL", "MangoDB"],
      gradient: "bg-gradient"
    },
    {
      title: "AI & ML Tools",
      icon: Brain,
      skills: ["NumPy", "Pandas", "Matplotlib"],
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Backend Technologies",
      icon: Server,
      skills: ["REST APIs", "Node.js", "Express"],
      gradient: "bg-gradient"
    },
    {
      title: "Core Computer Science",
      icon: Cpu,
      skills: ["Data Structures"],
      gradient: "bg-gradient-secondary"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and programming languages 
            I use to build innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-smooth hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-full ${category.gradient}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="bg-muted/50 text-foreground hover:bg-primary/20 transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;