
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Cloud, Server, Code, GitBranch, Terminal, Shield } from "lucide-react";

const SkillCategory = ({ 
  title, 
  icon, 
  skills 
}: { 
  title: string; 
  icon: React.ReactNode; 
  skills: string[];
}) => {
  return (
    <Card className="p-4 sm:p-6 transition-all hover:shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-devops-600 dark:text-devops-400">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-xs sm:text-sm px-2 sm:px-3 py-1">
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My toolkit for building reliable, scalable, and automated cloud infrastructure
          </p>
          <div className="w-24 h-1 bg-devops-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <SkillCategory 
            title="Cloud Platforms" 
            icon={<Cloud size={20} className="sm:w-6 sm:h-6" />}
            skills={["Microsoft Azure", "Azure Kubernetes Service", "Azure DevOps", "Terraform Cloud"]}
          />
          
          <SkillCategory 
            title="DevOps & CI/CD" 
            icon={<GitBranch size={20} className="sm:w-6 sm:h-6" />}
            skills={["Azure DevOps", "GitLab", "GitHub", "GitHub Actions", "Azure DevOps Pipelines"]}
          />
          
          <SkillCategory 
            title="Infrastructure as Code" 
            icon={<Code size={20} className="sm:w-6 sm:h-6" />}
            skills={["Terraform", "Bicep", "Azure Verified Modules", "PowerShell", "Azure CLI"]}
          />
          
          <SkillCategory 
            title="Containerization" 
            icon={<Server size={20} className="sm:w-6 sm:h-6" />}
            skills={["Docker", "Azure Kubernetes Service (AKS)", "Helm Charts", "Virtual Machine Scale Sets"]}
          />
          
          <SkillCategory 
            title="Automation & Scripting" 
            icon={<Terminal size={20} className="sm:w-6 sm:h-6" />}
            skills={["PowerShell", "Azure CLI", "Airbyte", "Agile", "CI/CD"]}
          />
          
          <SkillCategory 
            title="Security & Monitoring" 
            icon={<Shield size={20} className="sm:w-6 sm:h-6" />}
            skills={["HashiCorp Sentinel", "Azure Monitoring", "Azure Key Vault", "High Availability Disaster Recovery"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
