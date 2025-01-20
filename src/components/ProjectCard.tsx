import { motion } from "framer-motion";
import { Github, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  github: string;
  demo: string;
  tech: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      tabIndex={0}
      role="article"
      aria-label={`Project: ${project.title}`}
      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
    >
      <Card className="h-full transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl bg-neutral-800/50 border-neutral-700/50 hover:border-indigo-500/50 hover:bg-neutral-800/80">
        <CardHeader>
          <CardTitle className="text-neutral-200">{project.title}</CardTitle>
          <CardDescription className="text-neutral-400">{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="secondary"
                className="bg-indigo-500/20 text-indigo-200 hover:bg-indigo-500/30 hover:text-indigo-100 border border-indigo-500/30 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-4">
          <Button
            size="sm"
            className="bg-indigo-600 hover:bg-indigo-700 text-white border-none"
            asChild
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button
            size="sm"
            className="bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border-indigo-500/30"
            asChild
          >
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}