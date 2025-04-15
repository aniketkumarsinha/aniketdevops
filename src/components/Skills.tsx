
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

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
    <Card className="p-6 transition-all hover:shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-devops-600 dark:text-devops-400">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My toolkit for building reliable, scalable, and automated infrastructure
          </p>
          <div className="w-24 h-1 bg-devops-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory 
            title="Container Orchestration" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M20 7h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v3H4c-1.103 0-2 .897-2 2v5c0 1.103.897 2 2 2h3v3c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2v-3h3c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm0 7h-5v5H9v-5H4V9h5V4h6v5h5v5z"></path>
              </svg>
            }
            skills={["Kubernetes", "Docker", "Docker Compose", "K3s", "Helm", "Podman"]}
          />
          
          <SkillCategory 
            title="CI/CD & Automation" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path>
              </svg>
            }
            skills={["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD", "Tekton", "CircleCI"]}
          />
          
          <SkillCategory 
            title="Cloud Platforms" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 18c0-2.21 1.79-4 4-4h6c2.21 0 4 1.79 4 4v1H5v-1zm0-10c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4zM9 8c0-1.031.712-1.832 1.619-1.924a2 2 0 0 0 1.762 1.924v.001c.101.886.901 1.611 1.94 1.611a1.999 1.999 0 0 0 1.947-1.606c.92.084 1.65.837 1.65 1.873 0 1.105-.895 2-2 2-1.93 0-3.5-1.57-3.5-3.5 0-1.042.901-1.97 2.003-1.999.062-.601.6-1.057 1.244-1.057.123 0 .24.019.349.054A3.558 3.558 0 0 0 12.5 4.5c-1.93 0-3.5 1.57-3.5 3.5z"></path>
              </svg>
            }
            skills={["AWS", "Azure", "Google Cloud", "DigitalOcean", "Linode", "Heroku"]}
          />
          
          <SkillCategory 
            title="Infrastructure as Code" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M20 6h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM8.5 4h7v2h-7V4zM18 19H6v-9h12v9z"></path>
                <path d="M10 14h4v3h-4z"></path>
              </svg>
            }
            skills={["Terraform", "AWS CloudFormation", "Ansible", "Pulumi", "Chef", "Puppet"]}
          />
          
          <SkillCategory 
            title="Monitoring & Observability" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M10 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v12H4V5h6V3z"></path>
                <path d="m18 11-2.5-4-2.5 4h5zm-.71-5.29-1.79 2.79L13.71 7 12 5.29 10.29 7 8.5 8.5 6.71 5.71 5.29 7.12 7.8 11H7v2h10v-2h-.8l2.51-3.88-1.42-1.41z"></path>
              </svg>
            }
            skills={["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic", "Jaeger"]}
          />
          
          <SkillCategory 
            title="Programming & Scripting" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M8 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h3m0-18v18m0-18h11c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H8"></path>
                <path d="M13 8l5 4-5 4"></path>
              </svg>
            }
            skills={["Python", "Bash", "Golang", "YAML", "HCL", "JavaScript"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
