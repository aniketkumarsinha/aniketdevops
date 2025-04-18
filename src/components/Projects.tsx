import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import ProjectCard from "./project/ProjectCard";
import VideoCard from "./project/VideoCard";
import { ProjectProps, VideoProps } from "@/types/project";

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
      title: "Most Important Files in Terraform",
      videoId: "Wy0-MMEr3wE",
      thumbnailUrl: "https://i.ytimg.com/vi/Wy0-MMEr3wE/maxresdefault.jpg",
      description: "In this video, we explore the most critical files in Terraform that every DevOps professional and cloud engineer must know. These files form the backbone of your Infrastructure as Code (IaC) projects"
    },
    {
      title: "What, Why, & How of Terraform?",
      videoId: "m-Y7518m9Tk",
      thumbnailUrl: "https://i.ytimg.com/vi/m-Y7518m9Tk/maxresdefault.jpg",
      description: "This video dive deep into the Terraform. What is Terraform? Why do we need and use Terraform? How Terraform works? Every detail about Terraform to get started."
    },
    {
      title: "Terraform State File & Remote Backend",
      videoId: "yQNOOp7XPMY",
      thumbnailUrl: "https://i.ytimg.com/vi/yQNOOp7XPMY/maxresdefault.jpg",
      description: "In this video, we dive deep into Terraform state files and remote backends—two critical components every DevOps professional and cloud engineer must understand"
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
