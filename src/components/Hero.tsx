
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Instagram, Linkedin, Youtube, Twitter, Server, Terminal, Cloud, Code, Award } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section id="home" className="min-h-screen pt-24 flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="flex-1 space-y-6 mb-10 md:mb-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block rounded-full bg-devops-100 dark:bg-devops-900/30 px-3 py-1 text-sm text-devops-700 dark:text-devops-300">
            <span className="flex items-center gap-1">
              <Terminal size={16} />
              <span>Infrastructure Expert & DevOps Engineer</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="text-devops-600 dark:text-devops-400">Aniket Kumar Sinha</span>
          </h1>
          
          <div className="flex flex-wrap gap-2 py-2">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm">
              <Award size={14} className="text-devops-500" />
              <span>Microsoft Certified DevOps Expert</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm">
              <Cloud size={14} className="text-devops-500" />
              <span>Azure Specialist</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm">
              <Code size={14} className="text-devops-500" />
              <span>Infrastructure as Code</span>
            </span>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-xl">
            Automating infrastructure, optimizing CI/CD pipelines, and ensuring scalable, reliable cloud solutions on Microsoft Azure.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full bg-devops-600 hover:bg-devops-700 dark:bg-devops-700 dark:hover:bg-devops-600">
              <a href="#projects" className="flex items-center gap-2">
                View Projects <ArrowRight size={16} />
              </a>
            </Button>
            <Button variant="outline" className="rounded-full border-devops-500 text-devops-700 dark:text-devops-400 dark:border-devops-700">
              <a href="#contact" className="flex items-center gap-2">
                Get in Touch
              </a>
            </Button>
          </div>

          <div className="flex gap-4 pt-2">
            <a 
              href="https://github.com/aniketkumarsinha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-devops-600 dark:text-gray-400 dark:hover:text-devops-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aniketkumarsinha/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-devops-600 dark:text-gray-400 dark:hover:text-devops-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://www.youtube.com/c/AniketKumarSinha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-devops-600 dark:text-gray-400 dark:hover:text-devops-400 transition-colors"
            >
              <Youtube size={24} />
            </a>
            <a 
              href="https://twitter.com/AniketKSinha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-devops-600 dark:text-gray-400 dark:hover:text-devops-400 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://www.instagram.com/aniketksinha/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-devops-600 dark:text-gray-400 dark:hover:text-devops-400 transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {!isMobile && (
          <div className="flex-1 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-devops-400 to-devops-600 rounded-full blur opacity-30 animate-pulse"></div>
              <div className="relative overflow-hidden w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white dark:border-gray-800">
                <img 
                  src="/lovable-uploads/91c42bea-dd17-4e3b-8231-d52e93560af8.png" 
                  alt="Aniket Kumar Sinha" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-devops-600/30 to-transparent"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
