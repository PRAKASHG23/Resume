import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a dedicated technology enthusiast currently pursuing my BTech in Computer Science 
            with specialization in Artificial Intelligence and Machine Learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg leading-relaxed">
              As a passionate developer and AI/ML enthusiast, I thrive on creating innovative 
              solutions that bridge the gap between complex algorithms and real-world applications. 
              My journey in technology began with a curiosity about how machines can learn and 
              think, leading me to explore the fascinating world of artificial intelligence.
            </p>
            
            <p className="text-lg leading-relaxed">
              I specialize in web development using modern technologies, database management 
              with MySQL, and leveraging generative AI tools to build cutting-edge applications. 
              My goal is to contribute to the tech industry by developing solutions that make 
              a meaningful impact.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Education</h3>
                    <p className="text-primary font-medium">BTech CSE - AI & ML</p>
                    <p className="text-muted-foreground">Lakshmi Narain College of Technology</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-secondary">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-muted-foreground">Open to opportunities nationwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;