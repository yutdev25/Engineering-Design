import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Calendar, Tag, FileText, Download } from "lucide-react";
import { fine } from "@/lib/fine";
import { Schema } from "@/lib/db-types";

// Extend the Schema projects type with additional properties
interface ExtendedProject extends Schema["projects"] {
  challenges?: string;
  technicalDetails?: string;
  drawings?: string[];
}

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<ExtendedProject | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        if (id) {
          const fetchedProject = await fine.table("projects").select().eq("id", parseInt(id));
          if (fetchedProject && fetchedProject.length > 0) {
            setProject(fetchedProject[0]);
          } else {
            // Use default project if none in database
            setProject(defaultProjects.find(p => p.id === parseInt(id)) || null);
          }
        }
      } catch (error) {
        console.error("Error fetching project:", error);
        setProject(defaultProjects.find(p => p.id === parseInt(id)) || null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const defaultProjects: ExtendedProject[] = [
    {
      id: 1,
      title: "Industrial Plumbing System Design",
      category: "Mechanical",
      images: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
      completionDate: "January 2023",
      description: "Complete plumbing system design with water storage tanks and distribution network for a manufacturing facility. This project included detailed 3D modeling of the entire system, pump room design, and comprehensive documentation for construction permits.",
      technicalDetails: "The system features a 1,500 GPM fire pump capacity with three sets of pumps, domestic water supply for multiple factory buildings, and integrated septic tank systems. All designs comply with local building codes and international standards for industrial plumbing systems.",
      challenges: "The main challenge in this project was integrating the plumbing system with the existing factory infrastructure while ensuring minimal disruption to operations. We developed a phased implementation plan that allowed for installation without production downtime.",
      drawings: [
        "https://i.ibb.co/Jt9XBSW/plumbing-3d-model.jpg",
        "https://i.ibb.co/0jDvhZP/water-supply.jpg"
      ]
    },
    {
      id: 2,
      title: "Fire Protection System",
      category: "Mechanical",
      images: "https://i.ibb.co/0jDvhZP/fire-pump-room.jpg",
      completionDate: "March 2023",
      description: "Comprehensive fire protection system design for a multi-story commercial building with sprinkler layout and piping diagrams. The system was designed to provide complete coverage for all areas of the building while optimizing water usage and pressure requirements.",
      technicalDetails: "The fire protection system includes a dedicated pump room, sprinkler systems throughout all floors, and emergency water storage. The design incorporates zone control valves, flow switches, and a central monitoring system for quick response to any fire incidents.",
      challenges: "Designing a fire protection system for a building with varying ceiling heights and mixed-use spaces required careful planning and coordination with architectural elements. We developed custom solutions for areas with special requirements while maintaining system integrity.",
      drawings: [
        "https://i.ibb.co/0jDvhZP/fire-pump-room.jpg",
        "https://i.ibb.co/Jm5LBSJ/fire-protection.jpg"
      ]
    },
    {
      id: 3,
      title: "HVAC Ductwork Design",
      category: "Mechanical",
      images: "https://i.ibb.co/Lk8LBSJ/facade-mep.jpg",
      completionDate: "June 2022",
      description: "Detailed HVAC ductwork design with 3D modeling for optimal airflow and energy efficiency. The system was designed to provide comfortable indoor conditions while minimizing energy consumption through strategic duct routing and sizing.",
      technicalDetails: "The HVAC system features variable air volume (VAV) boxes, energy recovery ventilators, and a building automation system for temperature control. Duct sizing was optimized using computational fluid dynamics to ensure balanced airflow throughout the building.",
      challenges: "Coordinating the HVAC ductwork with structural elements and other building systems required extensive 3D modeling and clash detection. We worked closely with the structural and electrical teams to resolve conflicts before construction began.",
      drawings: [
        "https://i.ibb.co/Lk8LBSJ/facade-mep.jpg",
        "https://i.ibb.co/Jm5LBSJ/mechanical-room.jpg"
      ]
    },
    {
      id: 4,
      title: "Factory Electrical Layout",
      category: "Electrical",
      images: "https://i.ibb.co/0jDvhZP/electrical-layout.jpg",
      completionDate: "October 2022",
      description: "Complete electrical distribution system design for a large manufacturing plant with power requirements analysis. The design included main distribution panels, branch circuits, and emergency power systems to support all production equipment and building services.",
      technicalDetails: "The electrical system includes a 2000 kVA transformer, main switchgear, and multiple distribution panels throughout the facility. The design incorporates power factor correction, harmonic filtering, and surge protection to ensure reliable operation of sensitive equipment.",
      challenges: "Calculating and balancing the electrical loads for various production equipment with different power requirements was a significant challenge. We conducted detailed load analysis and simulation to optimize the distribution system and prevent overloading.",
      drawings: [
        "https://i.ibb.co/0jDvhZP/electrical-layout.jpg"
      ]
    }
  ];

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-xl">Loading project details...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Project Not Found</h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                The project you're looking for doesn't exist or has been removed.
              </p>
              <Button asChild className="mt-8">
                <Link to="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Projects
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-900 dark:bg-blue-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <Button asChild variant="ghost" className="mb-4 text-blue-100 hover:text-white hover:bg-blue-800">
                  <Link to="/projects">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                  </Link>
                </Button>
                <h1 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h1>
                <div className="mt-4 flex flex-wrap gap-4">
                  <div className="flex items-center text-blue-200">
                    <Tag className="h-5 w-5 mr-2" />
                    <span>{project.category}</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>Completed: {project.completionDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={project.images} 
                    alt={project.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>

                <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
                  <TabsList className="mb-8">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="technical">Technical Details</TabsTrigger>
                    <TabsTrigger value="drawings">Technical Drawings</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-0">
                    <div className="prose max-w-none dark:prose-invert">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Project Overview</h2>
                      <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-8">Challenges & Solutions</h3>
                      <p className="text-gray-700 dark:text-gray-300">{project.challenges || "Our team worked closely with the client to overcome various technical challenges throughout the project lifecycle, ensuring that all requirements were met while maintaining high standards of quality and efficiency."}</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="technical" className="mt-0">
                    <div className="prose max-w-none dark:prose-invert">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Technical Specifications</h2>
                      <p className="text-gray-700 dark:text-gray-300">{project.technicalDetails || "This project involved detailed engineering calculations, system sizing, and equipment selection to ensure optimal performance. All designs were created in accordance with relevant building codes and industry standards."}</p>
                      
                      <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Key Technical Features</h3>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 mr-3 mt-0.5">1</span>
                            <span className="text-gray-700 dark:text-gray-300">Professional engineering design with detailed calculations</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 mr-3 mt-0.5">2</span>
                            <span className="text-gray-700 dark:text-gray-300">3D modeling and visualization for accurate implementation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 mr-3 mt-0.5">3</span>
                            <span className="text-gray-700 dark:text-gray-300">Compliance with all relevant building codes and standards</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 mr-3 mt-0.5">4</span>
                            <span className="text-gray-700 dark:text-gray-300">Energy-efficient design principles for sustainable operation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="drawings" className="mt-0">
                    <div className="prose max-w-none dark:prose-invert">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Technical Drawings</h2>
                      <p className="text-gray-700 dark:text-gray-300">Below are the detailed technical drawings created for this project, showcasing our engineering expertise and attention to detail.</p>
                      
                      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {(project.drawings || []).map((drawing, index) => (
                          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                            <img 
                              src={drawing} 
                              alt={`Technical drawing ${index + 1} for ${project.title}`} 
                              className="w-full h-auto object-cover"
                            />
                            <div className="p-4">
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Drawing {index + 1}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Technical specification for {project.category.toLowerCase()} system component</p>
                            </div>
                          </div>
                        ))}
                        
                        {/* If no drawings are available */}
                        {(!project.drawings || project.drawings.length === 0) && (
                          <div className="col-span-full text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <FileText className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                            <p className="mt-4 text-gray-600 dark:text-gray-400">Detailed technical drawings are available upon request.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Project Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Project Type</h4>
                      <p className="text-gray-900 dark:text-gray-100">{project.category}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Completion Date</h4>
                      <p className="text-gray-900 dark:text-gray-100">{project.completionDate}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Services Provided</h4>
                      <ul className="mt-2 space-y-1 text-gray-900 dark:text-gray-100">
                        <li>• Engineering Design</li>
                        <li>• Technical Documentation</li>
                        <li>• Permit Application</li>
                        <li>• Construction Support</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Request Project Details
                    </Button>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Need a Similar Project?</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Contact our team to discuss your engineering design needs and how we can help bring your project to life.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Related Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {defaultProjects
                .filter(p => p.id !== project.id && p.category === project.category)
                .slice(0, 3)
                .map(relatedProject => (
                  <div key={relatedProject.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
                    <img 
                      src={relatedProject.images} 
                      alt={relatedProject.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{relatedProject.title}</h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400 line-clamp-2">{relatedProject.description}</p>
                      <Button asChild variant="outline" className="mt-4">
                        <Link to={`/project/${relatedProject.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;