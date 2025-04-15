
import { AtSign, MapPin } from "lucide-react";

const ContactInfo = ({ 
  icon, 
  title, 
  value 
}: { 
  icon: React.ReactNode;
  title: string;
  value: string;
}) => {
  return (
    <div className="flex items-start gap-4">
      <div className="text-devops-600 dark:text-devops-400 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{value}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss DevOps solutions? I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-devops-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 bg-gray-50 dark:bg-slate-700 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
            <div className="space-y-6">
              <ContactInfo 
                icon={<AtSign size={24} />}
                title="Email"
                value="sinhaaniket32@gmail.com"
              />
              <ContactInfo 
                icon={<MapPin size={24} />}
                title="Location"
                value="Pune, Maharashtra, India"
              />
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
                className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" 
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" 
                className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
