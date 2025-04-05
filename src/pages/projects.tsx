import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Luxury Hotel Electrical System",
      category: "Electrical",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
      completionDate: "January 2023",
      description: "Complete electrical system design for a 5-star hotel in Bangkok."
    },
    {
      id: 2,
      title: "Office Building HVAC Design",
      category: "Mechanical",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
      completionDate: "March 2023",
      description: "Energy-efficient HVAC system design for a modern office building."
    },
    {
      id: 3,
      title: "Industrial Factory Power System",
      category: "Electrical",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
      completionDate: "June 2022",
      description: "High-capacity power distribution system for a manufacturing facility."
    },
    {
      id: 4,
      title: "Shopping Mall Ventilation",
      category: "Mechanical",
      image: "https://images.unsplash.com/photo-1567449303078-57ad995bd3fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
      completionDate: "October 2022",
      description: "Advanced ventilation system design for a large shopping mall."
    },
    {
      id: 5,
      title: "Hospital Emergency Power",
      category: "Electrical",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
      completionDate: "April 2023",
      description: "Reliable emergency power system for a medical facility."
    },
    {
      id: 6,
      title: "Residential Complex HVAC",
      category: "Mechanical",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
      completionDate: "August 2022",
      description: "Centralized HVAC system for a luxury residential complex."
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeTab);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Projects</h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
              Explore our portfolio of successful engineering design projects.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                  <TabsTrigger value="electrical">Electrical</TabsTrigger>
                  <TabsTrigger value="mechanical">Mechanical</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      category={project.category}
                      image={project.image}
                      completionDate={project.completionDate}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="electrical" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      category={project.category}
                      image={project.image}
                      completionDate={project.completionDate}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="mechanical" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      category={project.category}
                      image={project.image}
                      completionDate={project.completionDate}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Project Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Project Approach</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                We follow a systematic approach to ensure successful project delivery.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right">
                    <h3 className="text-xl font-semibold text-blue-800">Requirements Analysis</h3>
                    <p className="mt-2 text-gray-600">
                      We begin by thoroughly understanding your project requirements and objectives.
                    </p>
                  </div>
                  <div className="mx-auto md:mx-0 my-4 md:my-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div className="flex-1 md:pl-8"></div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8"></div>
                  <div className="mx-auto md:mx-0 my-4 md:my-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left">
                    <h3 className="text-xl font-semibold text-blue-800">Conceptual Design</h3>
                    <p className="mt-2 text-gray-600">
                      Creating initial design concepts that align with your project goals and constraints.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right">
                    <h3 className="text-xl font-semibold text-blue-800">Detailed Engineering</h3>
                    <p className="mt-2 text-gray-600">
                      Developing comprehensive engineering designs with all necessary specifications.
                    </p>
                  </div>
                  <div className="mx-auto md:mx-0 my-4 md:my-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div className="flex-1 md:pl-8"></div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8"></div>
                  <div className="mx-auto md:mx-0 my-4 md:my-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left">
                    <h3 className="text-xl font-semibold text-blue-800">Documentation & Approval</h3>
                    <p className="mt-2 text-gray-600">
                      Preparing all necessary documentation and obtaining required approvals.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right">
                    <h3 className="text-xl font-semibold text-blue-800">Implementation Support</h3>
                    <p className="mt-2 text-gray-600">
                      Providing technical support during the implementation phase of your project.
                    </p>
                  </div>
                  <div className="mx-auto md:mx-0 my-4 md:my-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    <span className="text-xl font-bold">5</span>
                  </div>
                  <div className="flex-1 md:pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Have a project in mind?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
              Let's discuss how our engineering expertise can help bring your vision to life.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
                <a href="/contact">Contact Our Team</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;