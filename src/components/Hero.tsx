
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="flex-1 space-y-6 mb-10 md:mb-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block rounded-full bg-devops-100 dark:bg-devops-900/30 px-3 py-1 text-sm text-devops-700 dark:text-devops-300">
            <span className="flex items-center gap-1">
              <Terminal size={16} />
              <span>DevOps Engineer</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="text-devops-600 dark:text-devops-400">Aniket Kumar Sinha</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-xl">
            Automating infrastructure, optimizing CI/CD pipelines, and ensuring scalable, reliable systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full bg-devops-600 hover:bg-devops-700">
              <a href="#projects" className="flex items-center gap-2">
                View Projects <ArrowRight size={16} />
              </a>
            </Button>
            <Button variant="outline" className="rounded-full">
              <a href="#contact" className="flex items-center gap-2">
                Get in Touch
              </a>
            </Button>
          </div>

          <div className="flex gap-4 pt-2">
            <a 
              href="https://github.com/aksingh-002" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-devops-600 dark:text-gray-400 dark:hover:text-devops-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aniket-kumar-sinha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-devops-600 dark:text-gray-400 dark:hover:text-devops-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-devops-400 to-devops-600 rounded-full blur opacity-30 animate-pulse"></div>
            <img 
              src="https://aniketkumarsinha.tech/assets/img/me.jpg" 
              alt="Aniket Kumar Sinha" 
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white dark:border-slate-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
