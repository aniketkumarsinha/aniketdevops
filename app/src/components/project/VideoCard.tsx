
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Youtube } from "lucide-react";
import { VideoProps } from "@/types/project";

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

export default VideoCard;
