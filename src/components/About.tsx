
import { Award, BookOpen, Code2, Briefcase } from "lucide-react";

const AboutCard = ({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <div className="text-devops-600 dark:text-devops-400 mb-2">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-1">{value}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{title}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-devops-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Cloud Consultant with DevOps expertise and passion for automation</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm currently working as a Cloud Consultant (DevOps) at Rapid Circle, where I design and implement scalable infrastructure using Terraform and reusable modules. I specialize in Microsoft Azure services, infrastructure as code, and CI/CD automation.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With 3+ years of comprehensive experience in Azure DevOps, GitHub Actions, and GitLab CI/CD, I've helped teams deliver software more efficiently by automating build, release, and deployment processes. I believe in infrastructure as code and continuous improvement to optimize workflows and reduce manual efforts.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <AboutCard 
                icon={<Award size={28} />}
                title="Certifications"
                value="5+"
              />
              <AboutCard 
                icon={<Code2 size={28} />}
                title="CI/CD Pipelines"
                value="25+"
              />
              <AboutCard 
                icon={<Briefcase size={28} />}
                title="Azure Projects"
                value="5+"
              />
              <AboutCard 
                icon={<BookOpen size={28} />}
                title="Years Experience"
                value="3+"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="DevOps and SRE Infrastructure Monitoring" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
