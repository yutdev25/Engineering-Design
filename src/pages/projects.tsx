import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fine } from "@/lib/fine";
import { Schema } from "@/lib/db-types";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [projects, setProjects] = useState<Schema["projects"][]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await fine.table("projects").select();
        if (fetchedProjects && fetchedProjects.length > 0) {
          setProjects(fetchedProjects);
        } else {
          // Use default projects if none in database
          setProjects(defaultProjects);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects(defaultProjects);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const defaultProjects = [
    {
      id: 1,
      title: "Industrial Plumbing System Design",
      category: "Mechanical",
      images: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
      completionDate: "January 2023",
      description: "Complete plumbing system design with water storage tanks and distribution network for a manufacturing facility."
    },
    {
      id: 2,
      title: "Fire Protection System",
      category: "Mechanical",
      images: "https://i.ibb.co/0jDvhZP/fire-pump-room.jpg",
      completionDate: "March 2023",
      description: "Comprehensive fire protection system design for a multi-story commercial building with sprinkler layout and piping diagrams."
    },
    {
      id: 3,
      title: "HVAC Ductwork Design",
      category: "Mechanical",
      images: "https://i.ibb.co/Lk8LBSJ/facade-mep.jpg",
      completionDate: "June 2022",
      description: "Detailed HVAC ductwork design with 3D modeling for optimal airflow and energy efficiency."
    },
    {
      id: 4,
      title: "Factory Electrical Layout",
      category: "Electrical",
      images: "https://i.ibb.co/0jDvhZP/electrical-layout.jpg",
      completionDate: "October 2022",
      description: "Complete electrical distribution system design for a large manufacturing plant with power requirements analysis."
    },
    {
      id: 5,
      title: "Water Supply System",
      category: "Mechanical",
      images: "https://i.ibb.co/0jDvhZP/water-supply.jpg",
      completionDate: "April 2023",
      description: "Water supply system design with pump rooms, storage tanks, and distribution network for a factory complex."
    },
    {
      id: 6,
      title: "Chilled Water Piping System",
      category: "Mechanical",
      images: "https://i.ibb.co/Lk8LBSJ/chilled-water-diagram.jpg",
      completionDate: "August 2022",
      description: "Chilled water piping system design for an office building's air conditioning system with detailed pipe routing."
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeTab);

  const technicalDrawings = [
    {
      id: 1,
      title: "Plumbing System 3D Model",
      description: "3D model of industrial plumbing system with storage tanks and distribution piping.",
      image: "https://i.ibb.co/Jt9XBSW/plumbing-3d-model.jpg"
    },
    {
      id: 2,
      title: "Fire Pump Room Design",
      description: "Detailed design of fire pump room with equipment layout and piping connections.",
      image: "https://i.ibb.co/0jDvhZP/fire-pump-room.jpg"
    },
    {
      id: 3,
      title: "Building Facade MEP Integration",
      description: "Technical drawing showing MEP system integration with building facade elements.",
      image: "https://i.ibb.co/Lk8LBSJ/facade-mep.jpg"
    },
    {
      id: 4,
      title: "Mechanical Room Layout",
      description: "3D model of mechanical room showing equipment placement and piping connections.",
      image: "https://i.ibb.co/Jm5LBSJ/mechanical-room.jpg"
    },
    {
      id: 5,
      title: "Chilled Water Piping Diagram",
      description: "Detailed diagram showing chilled water piping layout for an office building.",
      image: "https://i.ibb.co/Lk8LBSJ/chilled-water-diagram.jpg"
    },
    {
      id: 6,
      title: "Electrical Distribution Layout",
      description: "Floor plan showing electrical distribution system for an office building.",
      image: "https://i.ibb.co/0jDvhZP/electrical-layout.jpg"
    },
    {
      id: 7,
      title: "Fire Protection System Layout",
      description: "Detailed layout of fire protection system with sprinkler placement and piping.",
      image: "https://i.ibb.co/Jm5LBSJ/fire-protection.jpg"
    },
    {
      id: 8,
      title: "Water Supply System Diagram",
      description: "Schematic diagram of water supply system with pump connections and storage tanks.",
      image: "https://i.ibb.co/0jDvhZP/water-supply.jpg"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-900 dark:bg-blue-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Projects</h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
              Explore our portfolio of successful engineering design projects.
            </p>
          </div>
        </section>

        {/* Technical Drawings Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Technical Engineering Drawings</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                Examples of our detailed engineering design work for various projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://i.ibb.co/Jt9XBSW/plumbing-3d-model.jpg" 
                  alt="Plumbing System 3D Model" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Plumbing System 3D Model</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    3D model of industrial plumbing system with storage tanks and distribution piping.
                    This design includes water storage tanks, pump systems, and detailed pipe routing.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://i.ibb.co/0jDvhZP/fire-pump-room.jpg" 
                  alt="Fire Pump Room Design" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Fire Pump Room Design</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Detailed design of fire pump room with equipment layout and piping connections.
                    The design ensures compliance with fire safety regulations and optimal performance.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://i.ibb.co/Lk8LBSJ/facade-mep.jpg" 
                  alt="Building Facade MEP Integration" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Building Facade MEP Integration</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Technical drawing showing MEP system integration with building facade elements.
                    This design demonstrates our ability to coordinate mechanical systems with architectural elements.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://i.ibb.co/Jm5LBSJ/mechanical-room.jpg" 
                  alt="Mechanical Room Layout" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Mechanical Room Layout</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    3D model of mechanical room showing equipment placement and piping connections.
                    The design optimizes space utilization while ensuring proper maintenance access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Completed Projects</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                Browse our portfolio of successfully completed engineering design projects.
              </p>
            </div>
            
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
                    <Link to={`/project/${project.id}`} key={project.id} className="group">
                      <div className="h-full transition-all hover:shadow-lg bg-white dark:bg-gray-700 rounded-lg overflow-hidden">
                        <div className="aspect-video w-full overflow-hidden">
                          <img 
                            src={project.images} 
                            alt={project.title} 
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
                          <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                            {project.category}
                          </div>
                          <p className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-2">{project.description}</p>
                          <div className="mt-4 flex justify-between items-center">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              Completed: {project.completionDate}
                            </span>
                            <span className="text-blue-600 dark:text-blue-400 inline-flex items-center text-sm font-medium">
                              View Details <ArrowRight className="ml-1 h-4 w-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="electrical" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <Link to={`/project/${project.id}`} key={project.id} className="group">
                      <div className="h-full transition-all hover:shadow-lg bg-white dark:bg-gray-700 rounded-lg overflow-hidden">
                        <div className="aspect-video w-full overflow-hidden">
                          <img 
                            src={project.images} 
                            alt={project.title} 
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
                          <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                            {project.category}
                          </div>
                          <p className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-2">{project.description}</p>
                          <div className="mt-4 flex justify-between items-center">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              Completed: {project.completionDate}
                            </span>
                            <span className="text-blue-600 dark:text-blue-400 inline-flex items-center text-sm font-medium">
                              View Details <ArrowRight className="ml-1 h-4 w-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="mechanical" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <Link to={`/project/${project.id}`} key={project.id} className="group">
                      <div className="h-full transition-all hover:shadow-lg bg-white dark:bg-gray-700 rounded-lg overflow-hidden">
                        <div className="aspect-video w-full overflow-hidden">
                          <img 
                            src={project.images} 
                            alt={project.title} 
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
                          <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                            {project.category}
                          </div>
                          <p className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-2">{project.description}</p>
                          <div className="mt-4 flex justify-between items-center">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              Completed: {project.completionDate}
                            </span>
                            <span className="text-blue-600 dark:text-blue-400 inline-flex items-center text-sm font-medium">
                              View Details <ArrowRight className="ml-1 h-4 w-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Additional Technical Drawings */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Detailed Engineering Designs</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                Examples of our technical drawings and schematics for various systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://i.ibb.co/Lk8LBSJ/chilled-water-diagram.jpg" 
                  alt="Chilled Water Piping Diagram" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Chilled Water Piping Diagram</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Detailed diagram showing chilled water piping layout for an office building.
                    This system is designed for optimal energy efficiency and performance.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://i.ibb.co/0jDvhZP/electrical-layout.jpg" 
                  alt="Electrical Distribution Layout" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Electrical Distribution Layout</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Floor plan showing electrical distribution system for an office building.
                    The design includes power distribution, lighting, and emergency systems.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://i.ibb.co/Jm5LBSJ/fire-protection.jpg" 
                  alt="Fire Protection System Layout" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Fire Protection System Layout</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Detailed layout of fire protection system with sprinkler placement and piping.
                    The system is designed to meet all safety codes and regulations.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://i.ibb.co/0jDvhZP/water-supply.jpg" 
                  alt="Water Supply System Diagram" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Water Supply System Diagram</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Schematic diagram of water supply system with pump connections and storage tanks.
                    The design ensures reliable water supply for all building needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Process */}
        <section className="py-16 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Our Project Approach</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                We follow a systematic approach to ensure successful project delivery.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-800"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right">
                    <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">Requirements Analysis</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      We begin by thoroughly understanding your project requirements and objectives.
                    </p>
                  </div>
                  <div className="mx-auto md:mx-0 my-4 md:my-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-700 text-white">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div className="flex-1 md:pl-8"></div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8"></div>
                  <div className="mx-auto md:mx-0 my-4 md:my-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-700 text-white">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left">
                    <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">Conceptual Design</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      Creating initial design concepts that align with your project goals and constraints.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right">
                    <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">Detailed Engineering</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      Developing comprehensive engineering designs with all necessary specifications.
                    </p>
                  </div>
                  <div className="mx-auto md:mx-0 my-4 md:my-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-700 text-white">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div className="flex-1 md:pl-8"></div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8"></div>
                  <div className="mx-auto md:mx-0 my-4 md:my-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-700 text-white">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left">
                    <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">Documentation & Approval</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      Preparing all necessary documentation and obtaining required approvals.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right">
                    <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">Implementation Support</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      Providing technical support during the implementation phase of your project.
                    </p>
                  </div>
                  <div className="mx-auto md:mx-0 my-4 md:my-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-700 text-white">
                    <span className="text-xl font-bold">5</span>
                  </div>
                  <div className="flex-1 md:pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-800 dark:bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Have a project in mind?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
              Let's discuss how our engineering expertise can help bring your vision to life.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-blue-800 dark:text-blue-900 hover:bg-blue-50">
                <Link to="/contact">Contact Our Team</Link>
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