import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { 
  Laptop, 
  Network, 
  UserCheck, 
  Database, 
  Building2, 
  Search, 
  Smartphone, 
  Palette, 
  Megaphone,
  ArrowRight
} from "lucide-react";

const dataServices = [
  {
    title: "Technographic Intelligence",
    desc: "Access in-depth insights on the customer base of over 45,000 technologies to refine and optimize your targeting strategy.",
    to: "/services/technographic-intelligence",
    icon: <Laptop size={20} />
  },
  {
    title: "Channel Partner Insights",
    desc: "Empower your channel strategy with in-depth partner profiles tailored to boost recruitment and success.",
    to: "/services/channel-partner-insights",
    icon: <Network size={20} />
  },
  {
    title: "Title Based Database",
    desc: "Identify and engage key decision-makers by segmenting your target audience based on job titles.",
    to: "/services/title-based-database",
    icon: <UserCheck size={20} />
  },
  {
    title: "Stack Data Append",
    desc: "Add technology usage information from target accounts to get insights on the tech stack of your MHAs.",
    to: "/services/stack-data-append",
    icon: <Database size={20} />
  },
  {
    title: "Industry Database",
    desc: "Power your pipeline with AI-driven industry segmentation. Maps SIC and NAICS data to deliver vertical insights.",
    to: "/services/industry-database",
    icon: <Building2 size={20} />
  },
  {
    title: "Data Appending & Discovery",
    desc: "Unlock better outreach results by appending updated and right decision-makers information to your existing data.",
    to: "/services/data-appending-and-discovery",
    icon: <Search size={20} />
  }
];

const scalingServices = [
  { 
    title: "Website Development", 
    desc: "Custom, high-converting websites built with modern technologies to scale your digital presence.", 
    to: "/services/website-development",
    icon: <Laptop size={20} />
  },
  { 
    title: "App Development", 
    desc: "Scalable iOS and Android applications designed for premium user experiences and business growth.", 
    to: "/services/app-development",
    icon: <Smartphone size={20} />
  },
  { 
    title: "Graphic Designing", 
    desc: "Strategic visual identities and creative assets that communicate your brand's excellence.", 
    to: "/services/graphic-designing",
    icon: <Palette size={20} />
  },
  { 
    title: "Digital Marketing", 
    desc: "Data-driven marketing strategies to expand your reach and build authority in your niche.", 
    to: "/services/digital-marketing",
    icon: <Megaphone size={20} />
  }
];

export function Services() {
  return (
    <section id="service" className="relative bg-[#f8faff] py-16 sm:py-24 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#004ab0 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/5 border border-[#004ab0]/10 px-4 py-1.5 text-xs font-bold text-[#004ab0] uppercase tracking-widest mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#004ab0] animate-pulse"></div>
            Core Expertise
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl xs:text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-[0.9]"
          >
            EXPLORE OUR PROFESSIONAL <br />
            <span className="text-[#004ab0]">DATA & MARKETING</span> SERVICES
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-slate-500 max-w-2xl font-medium leading-relaxed"
          >
            Empowering growth and strategy teams with precision-engineered data insights for exponential market success.
          </motion.p>
        </div>

        {/* Data Services Grid */}
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataServices.map((item, i) => (
              <ServiceCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Scaling Services Separator */}
        <div className="mt-24 mb-16 pt-16 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-4">Scaling & Creative</h3>
              <p className="text-slate-500 font-medium">Four disciplines, one team. We blend craft and conversion to build experiences that move metrics.</p>
            </div>
            <Link to="/services" className="text-sm font-bold text-[#004ab0] flex items-center gap-2 hover:gap-3 transition-all">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Scaling Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scalingServices.map((item, i) => (
            <ServiceCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ item, index }: { item: any, index: number }) {
  return (
    <Link to={item.to} className="block group h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 h-full flex flex-col group-hover:-translate-y-1"
      >
        <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mb-8 group-hover:bg-[#004ab0]/5 group-hover:text-[#004ab0] group-hover:border-[#004ab0]/10 transition-colors">
          {item.icon}
        </div>
        
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#004ab0] transition-colors">{item.title}</h3>
          <p className="text-sm leading-relaxed text-slate-500 font-medium">
            {item.desc}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-xs font-bold text-[#004ab0] uppercase tracking-widest">Learn More</span>
          <ArrowRight size={14} className="text-[#004ab0]" />
        </div>
      </motion.div>
    </Link>
  );
}
