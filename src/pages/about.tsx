import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeatureSection } from "@/components/FeatureSection";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">About Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
              Learn more about A.P. Engineering Design Co., Ltd. and our commitment to excellence.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Our Company</h2>
                <p className="mt-4 text-lg text-gray-600">
                  A.P. Engineering Design Co., Ltd. was established by experienced design engineers with extensive 
                  backgrounds in design, installation, and project management. Our team has contributed to numerous 
                  projects including hotels, office buildings, factories, and warehouses.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  With over 10 years of experience in the industry, we have built a reputation for delivering 
                  high-quality engineering solutions that meet our clients' needs and comply with all regulatory 
                  requirements.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                  alt="Engineering team meeting"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              To provide exceptional engineering design services that exceed client expectations, 
              ensure regulatory compliance, and contribute to the success of construction projects 
              throughout Thailand.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <FeatureSection
          title="Our Values"
          description="At A.P. Engineering Design, we are guided by a set of core values that define how we work and interact with our clients."
          features={[
            "Excellence in all aspects of our work",
            "Integrity in our professional relationships",
            "Innovation in our design approaches",
            "Reliability in meeting project deadlines"
          ]}
          image="https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          imageAlt="Engineering team collaboration"
        />

        {/* Our Team */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                Our experienced professionals are dedicated to delivering the highest quality engineering solutions.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Team member"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">อดิชล</h3>
                  <p className="text-blue-700">Lead Engineer</p>
                  <p className="mt-2 text-gray-600">
                    Over 10 years of experience in electrical system design for commercial and industrial projects.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Team member"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">Mr. Leehom</h3>
                  <p className="text-blue-700">Project Manager</p>
                  <p className="mt-2 text-gray-600">
                    Specializes in project management and coordination with regulatory authorities.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Team member"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">Technical Specialist</h3>
                  <p className="text-blue-700">HVAC Engineer</p>
                  <p className="mt-2 text-gray-600">
                    Expert in mechanical and HVAC system design with extensive experience in various building types.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;