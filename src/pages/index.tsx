import { Zap, Shield, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { FeatureSection } from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  const services = [
    {
      title: "Electrical System Design",
      description: "Professional electrical system design with certification for construction permits.",
      icon: Zap,
    },
    {
      title: "Mechanical & HVAC Design",
      description: "Comprehensive mechanical and HVAC system design for all types of buildings.",
      icon: Shield,
    },
    {
      title: "Construction Permits",
      description: "Complete documentation preparation and submission for construction permits.",
      icon: Award,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Us?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                With over 10 years of experience, we provide reliable engineering design services.
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
          </div>
        </section>

        {/* Feature Section */}
        <FeatureSection
          title="Expert Engineering Design"
          description="Our team of experienced engineers provides comprehensive design services for all your project needs."
          features={[
            "Professional certification for all designs",
            "Compliance with all regulatory requirements",
            "Detailed documentation for construction",
            "Cost-effective solutions for your projects"
          ]}
          image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          imageAlt="Engineers working on design"
        />

        <FeatureSection
          title="Comprehensive Project Support"
          description="From initial design to final approval, we support you through every step of your project."
          features={[
            "Complete permit application preparation",
            "Construction cost estimation for systems",
            "Technical consultation throughout the project",
            "As-built drawing preparation"
          ]}
          image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          imageAlt="Construction project blueprint"
          reversed={true}
        />

        {/* CTA Section */}
        <section className="bg-blue-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to start your project?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
              Contact us today for a consultation and let our experienced team help bring your vision to life.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;