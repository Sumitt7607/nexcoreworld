import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CtaFooter } from "@/components/CtaFooter";
import { 
  Laptop, 
  Smartphone, 
  Palette, 
  Video, 
  Megaphone, 
  TrendingUp, 
  Mail, 
  Filter,
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe,
  Check,
  Rocket,
  Sparkles,
  BarChart,
  Target,
  Users
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services/scaling")({
  component: ScalingServices,
});

function ScalingServices() {
  const disciplines = [
    {
      id: "website-development",
      title: "Website Development",
      icon: <Laptop size={32} />,
      to: "/services/website-development",
      desc: "We build websites that don't just look stunning but are engineered for performance and conversion. Our development team uses cutting-edge technologies to ensure your site is fast, secure, and ready to scale with your business.",
      features: ["Custom UI/UX Design", "Responsive Web Apps", "E-commerce Solutions", "SEO-First Architecture"],
      color: "bg-blue-500"
    },
    {
      id: "app-development",
      title: "App Development",
      icon: <Smartphone size={32} />,
      to: "/services/app-development",
      desc: "From concept to launch, we create intuitive mobile experiences for iOS and Android. Our apps focus on user engagement and seamless functionality, helping you connect with your customers wherever they are.",
      features: ["iOS & Android Apps", "Cross-Platform (React Native)", "App Store Optimization", "Backend Integration"],
      color: "bg-indigo-500"
    },
    {
      id: "graphic-designing",
      title: "Graphic Designing",
      icon: <Palette size={32} />,
      to: "/services/graphic-designing",
      desc: "Visual storytelling that defines your brand. We create premium brand identities, marketing collateral, and digital assets that resonate with your target audience and command attention in a crowded market.",
      features: ["Brand Identity & Logos", "Marketing Collateral", "Social Media Graphics", "Print & Digital Design"],
      color: "bg-purple-500"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      icon: <Megaphone size={32} />,
      to: "/services/digital-marketing",
      desc: "Strategic growth through targeted digital channels. We help you build brand authority and reach new audiences through data-backed marketing strategies tailored to your unique business goals.",
      features: ["Search Engine Optimization", "Social Media Management", "Content Strategy", "Brand Positioning"],
      color: "bg-orange-500"
    }


  ];


  return (
    <main className="min-h-screen bg-[#f8faff] text-slate-900 font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-[#004ab0] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c0ff33]/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold text-[#c0ff33] uppercase tracking-widest mb-6">
              Eight Disciplines, One Team
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              Website Services <br /> <span className="text-[#c0ff33]">That Scale</span>
            </h1>
            <p className="text-xl text-white/80 font-medium leading-relaxed mb-10">
              We blend craft and conversion to build experiences that move metrics. From engineering to creative, we provide the full-stack scaling power your business needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#c0ff33] text-[#0f172a] font-bold uppercase tracking-wider rounded-xl hover:bg-white transition-colors shadow-lg">
                Get a Custom Quote
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider rounded-xl hover:bg-white/10 transition-all">
                Explore Our Work
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disciplines Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {disciplines.map((item, index) => (
              <Link key={item.id} to={item.to} className="block h-full">
                <motion.div 
                  id={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                  className="bg-white rounded-[2.5rem] border border-slate-100 p-8 sm:p-12 shadow-sm hover:shadow-xl transition-all group h-full flex flex-col"
                >
                  <div className={`w-16 h-16 ${item.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h2 className="text-3xl font-black text-[#0f172a] mb-4 uppercase tracking-tight">{item.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 mt-auto">
                    {item.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                          <Check size={12} />
                        </div>
                        <span className="text-sm font-bold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-[#004ab0] font-black uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-3 transition-all pt-4 border-t border-slate-50">
                    See Details <ArrowRight size={16} />
                  </div>
                </motion.div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0f172a] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-bold text-[#c0ff33] uppercase tracking-widest mb-6">
                Why Partner With Us
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                The Nexcore Technologies <br /> Advantage
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Integrated Strategy", desc: "Your website, ads, and marketing shouldn't work in silos. We integrate all disciplines into a single growth engine." },
                  { title: "Conversion Obsessed", desc: "Traffic is useless without conversion. Every pixel we place is designed to drive the user towards a goal." },
                  { title: "Scalable Infrastructure", desc: "We build for where you're going, not just where you are. Our solutions handle millions of visitors without breaking a sweat." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-[#c0ff33] text-[#0f172a] rounded-xl flex items-center justify-center shrink-0">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#004ab0] to-indigo-900 rounded-[3rem] p-8 sm:p-16 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Rocket size={200} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black uppercase mb-6">Ready to scale?</h3>
                  <p className="text-white/80 text-lg mb-10">
                    Join 200+ brands that have transformed their digital presence with our integrated scaling services.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-xl flex items-center justify-between border border-white/5">
                      <span className="font-bold">Project Velocity</span>
                      <span className="text-[#c0ff33] font-black">Fast-Track</span>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl flex items-center justify-between border border-white/5">
                      <span className="font-bold">Team Access</span>
                      <span className="text-[#c0ff33] font-black">24/7 Priority</span>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl flex items-center justify-between border border-white/5">
                      <span className="font-bold">Strategic Audit</span>
                      <span className="text-[#c0ff33] font-black">Included</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
