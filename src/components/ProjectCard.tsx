import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  completionDate: string;
}

export function ProjectCard({ title, category, image, completionDate }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <Badge variant="secondary" className="mt-2">{category}</Badge>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Completed: {completionDate}
      </CardFooter>
    </Card>
  );
}