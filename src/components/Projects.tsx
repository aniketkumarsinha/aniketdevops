import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Youtube } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  blogUrl?: string;
}

interface VideoProps {
  title: string;
  videoId: string;
  thumbnailUrl: string;
  description: string;
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
      <CardFooter className="flex flex-wrap gap-3">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={16} />
              <span>Code</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const VideoCard = ({ video }: { video: VideoProps }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-lg">
      <a 
        href={`https://www.youtube.com/watch?v=${video.videoId}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block aspect-video overflow-hidden bg-gray-100 dark:bg-slate-700 relative group"
      >
        <img 
          src={video.thumbnailUrl} 
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity">
          <Youtube size={48} className="text-white" />
        </div>
      </a>
      <CardHeader>
        <CardTitle className="line-clamp-2 h-14">{video.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-3">
          {video.description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
          <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            <Youtube size={16} />
            <span>Watch on YouTube</span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "Deploy Airbyte on AKS",
      description: "Designed and deployed a scalable Airbyte architecture on Azure Kubernetes Service (AKS), leveraging Helm charts for efficient deployment and management.",
      image: "https://images.unsplash.com/photo-1667372459510-55b5e2087cd0?w=800&auto=format&fit=crop&q=60",
      tags: ["AKS", "Helm", "Airbyte", "Azure"],
      githubUrl: "https://github.com/aksingh-77/Deploy-Airbyte-in-AKS",
      blogUrl: "https://dev.to/aniketkumarsinha/deploy-airbyte-on-aks-31co"
    },
    {
      title: "Terraform Cloud with GitHub Actions",
      description: "Integrated Terraform Cloud with GitHub Actions for seamless and automated infrastructure deployments, ensuring consistent and reliable infrastructure provisioning.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
      tags: ["Terraform Cloud", "GitHub Actions", "CI/CD", "IaC"],
      githubUrl: "https://github.com/aniketkumarsinha/tfc-integration-gh-action"
    },
    {
      title: "Terraform State Migration to Terraform Cloud",
      description: "Developed a streamlined process for migrating Terraform state files from Azure Storage Accounts to Terraform Cloud workspaces, ensuring seamless transitions without disruption.",
      image: "https://images.unsplash.com/photo-1498058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60",
      tags: ["Terraform", "Azure", "State Management", "Cloud Migration"],
      githubUrl: "https://github.com/aniketkumarsinha/migration-of-terraform-state-file-to-terraform-cloud-workspace"
    },
    {
      title: "Policy-as-Code with HashiCorp Sentinel",
      description: "Implemented Sentinel for Policy-as-Code in Terraform workflows, enforcing governance and compliance across infrastructure deployments while maintaining operational efficiency.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60",
      tags: ["HashiCorp Sentinel", "Terraform", "Policy-as-Code", "Governance"],
      githubUrl: "https://github.com/aniketkumarsinha/terraform-sentinel-policy"
    }
  ];

  const terraformVideos: VideoProps[] = [
    {
      title: "Azure DevOps Pipeline | Terraform CI/CD | Dynamic Block | For Each | Count in Terraform | Azure DevOps",
      videoId: "m-Y7518m9Tk",
      thumbnailUrl: "https://i.ytimg.com/vi/m-Y7518m9Tk/maxresdefault.jpg",
      description: "Learn how to use dynamic blocks, for_each, count in Terraform to create Azure resources efficiently, and integrate it with Azure DevOps CI/CD pipelines."
    },
    {
      title: "Deploy Static Website on AWS S3 | CI/CD | GitHub Actions | Terraform Cloud | GitHub Pages Alternative",
      videoId: "TpKQvOlqvYM",
      thumbnailUrl: "https://i.ytimg.com/vi/TpKQvOlqvYM/maxresdefault.jpg",
      description: "Complete guide on deploying a static website to AWS S3 using Terraform and GitHub Actions for CI/CD, with Terraform Cloud as the backend."
    },
    {
      title: "Angular App Deployment on Azure | Azure DevOps Pipeline | Build and Deploy Angular App to Azure Web App",
      videoId: "Wy0-MMEr3wE",
      thumbnailUrl: "https://i.ytimg.com/vi/Wy0-MMEr3wE/maxresdefault.jpg",
      description: "Step-by-step guide to deploy an Angular application to Azure Web App using Azure DevOps Pipeline, including build and release configurations."
    },
    {
      title: "Azure DevOps CI/CD Pipeline for Azure App Service | Deploy Web App using Azure DevOps Pipeline",
      videoId: "yQNOOp7XPMY",
      thumbnailUrl: "https://i.ytimg.com/vi/yQNOOp7XPMY/maxresdefault.jpg",
      description: "Learn how to create CI/CD pipelines in Azure DevOps for deploying applications to Azure App Service, including best practices and configurations."
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Highlighting my work in Azure DevOps, Infrastructure as Code, and cloud automation
          </p>
          <div className="w-24 h-1 bg-devops-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Terraform Tutorial Videos</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Check out my YouTube tutorials on Terraform and infrastructure automation
            </p>
            <div className="w-24 h-1 bg-devops-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {terraformVideos.map((video, index) => (
              <VideoCard key={index} video={video} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
              <a 
                href="https://www.youtube.com/playlist?list=PLL4TUV2Y6CBNa_C0MkfjIlR1YS-WTHTxR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Youtube size={20} />
                <span>View Full Terraform Playlist</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
