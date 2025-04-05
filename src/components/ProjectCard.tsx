import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  id?: number;
  title: string;
  category: string;
  image: string;
  completionDate: string;
  description?: string;
}

export function ProjectCard({ id, title, category, image, completionDate, description }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg h-full bg-white dark:bg-gray-800 border-border dark:border-gray-700">
      <Link to={id ? `/project/${id}` : "#"} className="group">
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          <Badge variant="secondary" className="mt-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
            {category}
          </Badge>
          {description && (
            <p className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-2">{description}</p>
          )}
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">
            Completed: {completionDate}
          </span>
          <span className="text-blue-600 dark:text-blue-400 inline-flex items-center text-sm font-medium">
            View Details <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </CardFooter>
      </Link>
    </Card>
  );
}