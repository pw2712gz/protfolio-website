import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Helmet } from "react-helmet-async";
import { PageTransition } from "@/components/PageTransition";
import { ProjectCard } from "@/components/ProjectCard";
import { useEffect, useState } from "react";

// Data
const projects = [
  {
    title: "E-Commerce Platform",
    description: "Built a full-stack e-commerce platform using React, Node.js, and PostgreSQL. Implemented secure payment processing and real-time inventory management.",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://demo-ecommerce.example.com",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"]
  },
  {
    title: "AI Task Manager",
    description: "Developed an AI-powered task management system that automatically prioritizes and categorizes tasks using natural language processing.",
    github: "https://github.com/yourusername/ai-tasks",
    demo: "https://ai-tasks.example.com",
    tech: ["Python", "TensorFlow", "FastAPI", "React"]
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Created a responsive dashboard for visualizing real-time data streams with customizable widgets and automated reporting features.",
    github: "https://github.com/yourusername/analytics",
    demo: "https://analytics-demo.example.com",
    tech: ["React", "D3.js", "WebSocket", "Redis"]
  },
  {
    title: "Cloud Infrastructure Monitor",
    description: "Engineered a comprehensive cloud monitoring solution that tracks resource usage, costs, and performance metrics across multiple cloud providers.",
    github: "https://github.com/yourusername/cloud-monitor",
    demo: "https://cloud-monitor.example.com",
    tech: ["TypeScript", "AWS", "Terraform", "Grafana"]
  },
  {
    title: "Collaborative Code Editor",
    description: "Built a real-time collaborative code editor with syntax highlighting, version control integration, and live pair programming capabilities.",
    github: "https://github.com/yourusername/collab-editor",
    demo: "https://collab-editor.example.com",
    tech: ["React", "WebSocket", "Monaco Editor", "Docker"]
  },
  {
    title: "Smart Home Automation Hub",
    description: "Developed a centralized IoT platform for managing smart home devices with automated routines, energy monitoring, and voice control integration.",
    github: "https://github.com/yourusername/smart-home",
    demo: "https://smart-home.example.com",
    tech: ["Node.js", "MQTT", "GraphQL", "React Native"]
  }
];

const skills = {
  "Frontend": ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  "Backend": ["Node.js", "Python", "PostgreSQL", "Redis"],
  "DevOps": ["Docker", "AWS", "CI/CD", "Kubernetes"],
  "Tools": ["Git", "VS Code", "Postman", "Figma"]
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const focusable = document.querySelectorAll(
        'a[href], button, [tabindex="0"]'
      );
      const current = document.activeElement;
      const index = Array.from(focusable).indexOf(current as Element);
      let nextIndex;

      if (e.key === 'ArrowDown') {
        nextIndex = (index + 1) % focusable.length;
      } else {
        nextIndex = index - 1 < 0 ? focusable.length - 1 : index - 1;
      }

      (focusable[nextIndex] as HTMLElement).focus();
    }
  };

  return (
    <>
      <Helmet>
        <title>Ayub Yusuf - Full Stack Software Developer Portfolio</title>
        <meta name="description" content="Full Stack Software Developer specializing in full-stack development, cloud infrastructure, and AI applications." />
        <meta name="keywords" content="software engineer, full-stack developer, React, Node.js, TypeScript, AWS" />
        <meta property="og:title" content="Ayub Yusuf - Full Stack Software Developer Portfolio" />
        <meta property="og:description" content="Full Stack Software Developer specializing in full-stack development, cloud infrastructure, and AI applications." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayub Yusuf - Full Stack Software Developer Portfolio" />
        <meta name="twitter:description" content="Full Stack Software Developer specializing in full-stack development, cloud infrastructure, and AI applications." />
      </Helmet>

      <div 
        className="min-h-screen bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        onKeyDown={handleKeyNavigation}
      >
        <PageTransition>
          {/* Header */}
          <header className="bg-neutral-900 border-b border-neutral-800" role="banner">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-neutral-200">Ayub Yusuf</h1>
                  <p className="text-indigo-400">Full Stack Software Developer</p>
                </div>
                <nav className="flex gap-4" role="navigation" aria-label="Social links">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-neutral-400 hover:text-indigo-600 transition-colors" 
                    asChild
                  >
                    <a 
                      href="https://github.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-neutral-400 hover:text-indigo-600 transition-colors" 
                    asChild
                  >
                    <a 
                      href="https://linkedin.com/in/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-neutral-400 hover:text-indigo-600 transition-colors" 
                    asChild
                  >
                    <a 
                      href="mailto:your.email@example.com"
                      aria-label="Email Contact"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </nav>
              </div>
            </div>
          </header>

          <main className="container mx-auto px-4 py-8" role="main">
            {/* Projects Section */}
            <section className="mb-12" aria-labelledby="projects-title">
              <h2 id="projects-title" className="text-3xl font-bold mb-6 text-neutral-200 text-center">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading ? (
                  // Loading skeleton
                  Array.from({ length: 6 }).map((_, index) => (
                    <Card key={index} className="animate-pulse bg-neutral-800/50 border-neutral-700/50">
                      <CardHeader>
                        <div className="h-6 bg-neutral-700/50 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-neutral-700/50 rounded w-full"></div>
                        <div className="h-4 bg-neutral-700/50 rounded w-5/6 mt-2"></div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <div className="h-6 bg-neutral-700/50 rounded w-20"></div>
                          <div className="h-6 bg-neutral-700/50 rounded w-24"></div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))
                )}
              </div>
            </section>

            {/* Skills Section */}
            <section aria-labelledby="skills-title">
              <h2 id="skills-title" className="text-3xl font-bold mb-6 text-neutral-200 text-center">Tech Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(skills).map(([category, categorySkills]) => (
                  <Card 
                    key={category} 
                    className="bg-neutral-800/50 border-neutral-700/50 hover:border-indigo-500/50 transition-colors duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="text-neutral-200">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {categorySkills.map((skill, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary" 
                            className="bg-indigo-500/20 text-indigo-200 hover:bg-indigo-500/30 hover:text-indigo-100 border border-indigo-500/30 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="border-t border-neutral-800 mt-12" role="contentinfo">
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-center items-center gap-6">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-neutral-400 hover:text-indigo-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <Separator orientation="vertical" className="h-4 bg-neutral-700" />
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-neutral-400 hover:text-indigo-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <Separator orientation="vertical" className="h-4 bg-neutral-700" />
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-neutral-400 hover:text-indigo-400 transition-colors"
                  aria-label="Email Contact"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </footer>
        </PageTransition>
      </div>
    </>
  );
}

export default App;