
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";
import { ProjectProps } from "@/types/project";

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

export default ProjectCard;
