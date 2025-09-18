import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-smooth">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-gradient">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">prakash.gupta@example.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-smooth">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-gradient-secondary">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-smooth">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-gradient">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input 
                      id="name"
                      placeholder="Your name"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background/50"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    placeholder="What's this about?"
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    className="bg-background/50 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient text-white hover:opacity-90 transition-smooth"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;