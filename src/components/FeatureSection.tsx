import { CheckCircle } from "lucide-react";

interface FeatureSectionProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  reversed?: boolean;
}

export function FeatureSection({ 
  title, 
  description, 
  features, 
  image, 
  imageAlt,
  reversed = false 
}: FeatureSectionProps) {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
          <div className={`${reversed ? 'md:order-2' : ''}`}>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-gray-600">{description}</p>
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${reversed ? 'md:order-1' : ''}`}>
            <img
              src={image}
              alt={imageAlt}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}