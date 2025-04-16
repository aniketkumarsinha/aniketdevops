
import { Github, Gitlab, Linkedin, Twitter, Cloud, Terminal, Server } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              Aniket<span className="text-devops-400">.dev</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              DevOps engineer focused on building reliable, scalable, and automated infrastructure.
            </p>
            <div className="flex gap-3 mt-4">
              <div className="flex items-center gap-1 text-sm text-gray-400">
                <Terminal size={14} className="text-devops-400" />
                <span>CI/CD</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-400">
                <Cloud size={14} className="text-devops-400" />
                <span>Cloud</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-400">
                <Server size={14} className="text-devops-400" />
                <span>Infrastructure</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a 
                href="https://github.com/aksingh-77" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-devops-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/aniket-kumar-sinha-55925b202/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-devops-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://gitlab.com/aksingh-77" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-devops-400 transition-colors"
              >
                <Gitlab size={20} />
              </a>
              <a 
                href="https://twitter.com/Aniket_Sinha_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-devops-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Aniket Kumar Sinha. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
