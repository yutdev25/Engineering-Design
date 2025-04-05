import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Contact Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
              Get in touch with our team to discuss your engineering design needs.
            </p>
          </div>
        </section>

        {/* Contact Information and Form */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Have questions about our services or want to discuss your project? 
                  Contact us using the information below or fill out the form.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <p className="text-gray-600">088-562-4892 (อดิชล)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p className="text-gray-600">info@apengineeringdesign.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Office Location</h3>
                      <p className="text-gray-600">Bangkok, Thailand</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Location</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                Visit our office in Bangkok, Thailand.
              </p>
            </div>

            <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
              {/* Replace with actual Google Maps embed code */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496115.3313133451!2d100.35290282845578!3d13.724727926517018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sus!4v1652345678901!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                Find answers to common questions about our services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">What types of projects do you handle?</h3>
                <p className="text-gray-600">
                  We handle a wide range of projects including hotels, office buildings, factories, warehouses, 
                  residential complexes, and more. Our expertise covers both commercial and industrial projects.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">How long does the design process take?</h3>
                <p className="text-gray-600">
                  The timeline varies depending on project complexity. Small projects may take 2-3 weeks, 
                  while larger projects can take 1-2 months. We'll provide a specific timeline during our initial consultation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Do you handle permit applications?</h3>
                <p className="text-gray-600">
                  Yes, we prepare all necessary documentation for construction permit applications and can assist 
                  with the submission process to ensure compliance with local regulations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">What information do you need to start a project?</h3>
                <p className="text-gray-600">
                  To begin, we typically need architectural drawings, project requirements, site information, 
                  and any specific preferences you have for the systems. We can discuss details during our initial consultation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;