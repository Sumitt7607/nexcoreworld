import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { Megaphone } from "lucide-react";

export const Route = createFileRoute("/services/digital-marketing")({
  component: DigitalMarketing,
});

function DigitalMarketing() {
  return (
    <ServiceDetailLayout
      title="Digital Marketing"
      subtitle="Strategic Growth"
      description="Omnichannel marketing strategies that build brand authority, expand reach, and drive consistent inbound traffic."
      icon={<Megaphone size={64} />}
      features={[
        "Search Engine Optimization",
        "Social Media Strategy",
        "Content Marketing",
        "Influencer Outreach",
        "Brand Positioning",
        "Market Analysis"
      ]}
      benefits={[
        {
          title: "Build Long-term Equity",
          desc: "Our organic strategies focus on building an asset that grows in value over time, reducing dependence on ads."
        },
        {
          title: "Market Authority",
          desc: "Position your brand as the go-to expert in your niche through high-quality content and SEO."
        },
        {
          title: "Customer Insights",
          desc: "Learn more about your audience through detailed analytics and engagement tracking."
        }
      ]}
      process={[
        {
          step: "01",
          title: "Market Research",
          desc: "Identifying trends, keywords, and audience behavior in your industry."
        },
        {
          step: "02",
          title: "Strategy Roadmap",
          desc: "Defining the channels and content types that will drive the most impact."
        },
        {
          step: "03",
          title: "Execution",
          desc: "Managing your digital presence and creating value-driven content."
        },
        {
          step: "04",
          title: "Analysis & Pivot",
          desc: "Measuring results and adjusting the strategy for maximum growth."
        }
      ]}
    />
  );
}
