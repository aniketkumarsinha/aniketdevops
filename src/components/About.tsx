
import { Award, BookOpen, Code2, Coffee } from "lucide-react";

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
    <section id="about" className="py-24 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-devops-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">A DevOps Engineer with a passion for automation & scalable systems</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a dedicated DevOps engineer with expertise in containerization, CI/CD pipelines, and cloud infrastructure. I enjoy solving complex problems and optimizing development workflows.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With experience across various technologies like Kubernetes, Docker, Jenkins, and AWS, I've helped teams deliver software more efficiently and reliably. I believe in infrastructure as code and continuous improvement.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <AboutCard 
                icon={<Coffee size={28} />}
                title="Cups of Coffee"
                value="1,246+"
              />
              <AboutCard 
                icon={<Code2 size={28} />}
                title="CI/CD Pipelines"
                value="75+"
              />
              <AboutCard 
                icon={<Award size={28} />}
                title="Certifications"
                value="8+"
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
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="DevOps illustration" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
