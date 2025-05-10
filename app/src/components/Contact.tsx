
import { AtSign, MapPin, Github, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

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
              <a href="https://github.com/aniketkumarsinha" target="_blank" rel="noopener noreferrer" 
                className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/aniketkumarsinha/" target="_blank" rel="noopener noreferrer" 
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/AniketKSinha" target="_blank" rel="noopener noreferrer" 
                className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/c/AniketKumarSinha" target="_blank" rel="noopener noreferrer" 
                className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://www.instagram.com/aniketksinha/" target="_blank" rel="noopener noreferrer" 
                className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
