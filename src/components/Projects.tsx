
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-slate-700">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 my-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-devops-50 dark:bg-devops-900/30 text-devops-700 dark:text-devops-300 border-devops-200 dark:border-devops-800">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600 dark:text-gray-300">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex gap-3">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={16} />
              <span>Code</span>
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button size="sm" className="bg-devops-600 hover:bg-devops-700" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "CI/CD Pipeline Automation",
      description: "Designed and implemented an end-to-end CI/CD pipeline using Jenkins, Docker, and Kubernetes for microservices architecture, reducing deployment time by 70%.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Jenkins", "Docker", "Kubernetes", "GitOps"],
      githubUrl: "https://github.com/aksingh-002",
      liveUrl: "#"
    },
    {
      title: "Infrastructure as Code Framework",
      description: "Developed a comprehensive IaC framework using Terraform and Ansible to manage AWS cloud resources, enabling consistent and repeatable infrastructure deployments.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      tags: ["Terraform", "Ansible", "AWS", "IaC"],
      githubUrl: "https://github.com/aksingh-002"
    },
    {
      title: "Kubernetes Monitoring Solution",
      description: "Implemented a robust monitoring solution using Prometheus and Grafana for Kubernetes clusters, creating custom dashboards for visualizing application and infrastructure metrics.",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd",
      tags: ["Prometheus", "Grafana", "Kubernetes", "Observability"],
      githubUrl: "https://github.com/aksingh-002",
      liveUrl: "#"
    },
    {
      title: "Multi-Cloud Deployment Strategy",
      description: "Architected a multi-cloud deployment strategy spanning AWS and GCP, ensuring high availability and disaster recovery capabilities.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["AWS", "GCP", "Terraform", "Multi-Cloud"],
      githubUrl: "https://github.com/aksingh-002"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Highlighting my work in DevOps, automation, and infrastructure management
          </p>
          <div className="w-24 h-1 bg-devops-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
