
export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  blogUrl?: string;
}

export interface VideoProps {
  title: string;
  videoId: string;
  thumbnailUrl: string;
  description: string;
}
