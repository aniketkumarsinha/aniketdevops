
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

interface CertificationProps {
  title: string;
  issuer: string;
  logo: string;
  badgeColor: string;
}

const Certification = ({ cert }: { cert: CertificationProps }) => {
  return (
    <Card className="p-6 flex flex-col md:flex-row items-center gap-4 transition-all hover:shadow-md">
      <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white rounded-full p-2">
        <img src={cert.logo} alt={cert.issuer} className="w-full h-auto" />
      </div>
      <div className="flex-grow text-center md:text-left">
        <h3 className="font-bold text-lg">{cert.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer}</p>
      </div>
    </Card>
  );
};

const Certifications = () => {
  const certifications: CertificationProps[] = [
    {
      title: "Microsoft Certified: DevOps Engineer Expert (AZ-400)",
      issuer: "Microsoft",
      logo: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
      issuer: "Microsoft",
      logo: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
      badgeColor: "bg-blue-500"
    },
    {
      title: "Microsoft Certified: Azure Network Engineer Associate (AZ-700)",
      issuer: "Microsoft",
      logo: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
      badgeColor: "bg-blue-500"
    },
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      logo: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
      badgeColor: "bg-blue-400"
    }
  ];

  return (
    <section id="certifications" className="py-24 px-4 md:px-8 bg-white dark:bg-slate-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Award className="h-8 w-8 text-devops-500" />
            <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and achievements in cloud and DevOps technologies
          </p>
          <div className="w-24 h-1 bg-devops-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Certification key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

