import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { Palette } from "lucide-react";

export const Route = createFileRoute("/services/graphic-designing")({
  component: GraphicDesigning,
});

function GraphicDesigning() {
  return (
    <ServiceDetailLayout
      title="Graphic Designing"
      subtitle="Visual Storytelling"
      description="Strategic brand identities and creative assets that define your market presence and resonate with your audience."
      icon={<Palette size={64} />}
      features={[
        "Brand Identity Design",
        "Social Media Kits",
        "Marketing Collateral",
        "Infographic Design",
        "Print & Packaging",
        "Digital Illustrations"
      ]}
      benefits={[
        {
          title: "Brand Consistency",
          desc: "We ensure every visual touchpoint aligns perfectly with your brand's voice and mission."
        },
        {
          title: "Premium Aesthetic",
          desc: "Command higher prices and build trust with sophisticated, world-class design work."
        },
        {
          title: "Strategic Impact",
          desc: "Our designs are built to solve business problems, not just look pretty on a screen."
        }
      ]}
      process={[
        {
          step: "01",
          title: "Brand Audit",
          desc: "Understanding your current identity and market positioning."
        },
        {
          step: "02",
          title: "Concept Creation",
          desc: "Developing multiple creative directions for your review and feedback."
        },
        {
          step: "03",
          title: "Design Refinement",
          desc: "Polishing the chosen direction until it's perfect down to the last pixel."
        },
        {
          step: "04",
          title: "Asset Delivery",
          desc: "Providing all necessary file formats for both digital and print applications."
        }
      ]}
    />
  );
}
