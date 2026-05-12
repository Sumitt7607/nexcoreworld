import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { Smartphone } from "lucide-react";

export const Route = createFileRoute("/services/app-development")({
  component: AppDevelopment,
});

function AppDevelopment() {
  return (
    <ServiceDetailLayout
      title="App Development"
      subtitle="Mobile Excellence"
      description="Creating intuitive, scalable, and high-engagement mobile applications for iOS and Android platforms."
      icon={<Smartphone size={64} />}
      features={[
        "iOS & Android Apps",
        "React Native Solutions",
        "App Store Optimization",
        "API & Backend Integration",
        "Push Notification Strategy",
        "User Analytics"
      ]}
      benefits={[
        {
          title: "Seamless User Experience",
          desc: "We focus on intuitive navigation and smooth interactions that keep users coming back to your app."
        },
        {
          title: "Scalable Architecture",
          desc: "Our apps are built to handle rapid user growth without compromising performance or security."
        },
        {
          title: "Market Ready Launch",
          desc: "We guide you through the entire app store submission process, ensuring a successful market entry."
        }
      ]}
      process={[
        {
          step: "01",
          title: "Concept Refinement",
          desc: "Validating your app idea and defining the core features for a successful MVP."
        },
        {
          step: "02",
          title: "Prototype & Design",
          desc: "Building interactive wireframes and high-fidelity UI designs."
        },
        {
          step: "03",
          title: "Agile Development",
          desc: "Iterative coding and testing to bring your app to life with the highest quality."
        },
        {
          step: "04",
          title: "Deploy & Scale",
          desc: "Submitting to app stores and monitoring performance for continuous improvement."
        }
      ]}
    />
  );
}
