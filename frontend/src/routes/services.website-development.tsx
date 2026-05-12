import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { Laptop } from "lucide-react";

export const Route = createFileRoute("/services/website-development")({
  component: WebsiteDevelopment,
});

function WebsiteDevelopment() {
  return (
    <ServiceDetailLayout
      title="Website Development"
      subtitle="Digital Engineering"
      description="We build high-performance, conversion-optimized websites that serve as the digital foundation for your brand's growth."
      icon={<Laptop size={64} />}
      features={[
        "Custom UI/UX Design",
        "Responsive Web Apps",
        "Performance Optimization",
        "CMS Integration",
        "E-commerce Solutions",
        "SEO-First Architecture"
      ]}
      benefits={[
        {
          title: "Engineered for Conversion",
          desc: "Every element of your site is strategically placed to guide users toward your desired action, maximizing your marketing ROI."
        },
        {
          title: "Blazing Fast Performance",
          desc: "Speed matters. We optimize every kilobyte to ensure your site loads instantly, improving both user experience and search rankings."
        },
        {
          title: "Future-Proof Technology",
          desc: "We use modern tech stacks that are scalable and maintainable, ensuring your digital presence grows with your business."
        }
      ]}
      process={[
        {
          step: "01",
          title: "Discovery & Strategy",
          desc: "We dive deep into your business goals, target audience, and competitive landscape."
        },
        {
          step: "02",
          title: "Design & UX",
          desc: "Creating intuitive user journeys and stunning visual designs that align with your brand."
        },
        {
          step: "03",
          title: "Development",
          desc: "Turning designs into clean, efficient, and high-performance code."
        },
        {
          step: "04",
          title: "Launch & Support",
          desc: "Rigorous testing followed by a seamless launch and ongoing optimization."
        }
      ]}
    />
  );
}
