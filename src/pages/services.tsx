import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Zap, Wind, FileText, Calculator, HardHat, Lightbulb } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Electrical System Design",
      description: "Comprehensive electrical system design including power distribution, lighting, emergency power systems, and more. All designs are certified by licensed engineers.",
      icon: Zap,
    },
    {
      title: "Mechanical & HVAC Design",
      description: "Complete mechanical and HVAC system design for optimal comfort, energy efficiency, and compliance with building codes and standards.",
      icon: Wind,
    },
    {
      title: "Construction Permit Documentation",
      description: "Preparation of all necessary documentation for construction permit applications, ensuring compliance with local regulations and building codes.",
      icon: FileText,
    },
    {
      title: "Construction Cost Estimation",
      description: "Detailed cost estimation for electrical and mechanical systems to help with project budgeting and financial planning.",
      icon: Calculator,
    },
    {
      title: "Technical Consultation",
      description: "Expert consultation on all aspects of engineering design, providing solutions to complex technical challenges in your projects.",
      icon: HardHat,
    },
    {
      title: "As-Built Drawing Preparation",
      description: "Creation of accurate as-built drawings that document the final installation of systems for future reference and maintenance.",
      icon: Lightbulb,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Services</h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
              Comprehensive engineering design services to meet all your project needs.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  Icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Service Process</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                We follow a structured approach to ensure the success of your project.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800 mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Consultation</h3>
                <p className="text-gray-600">
                  Initial meeting to understand your project requirements and objectives.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800 mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Design Development</h3>
                <p className="text-gray-600">
                  Creating detailed engineering designs based on your requirements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800 mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                <p className="text-gray-600">
                  Preparing all necessary documents for permit applications.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800 mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Project Support</h3>
                <p className="text-gray-600">
                  Ongoing support throughout the construction and implementation phases.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to start your project?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
              Contact us today to discuss your engineering design needs.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;