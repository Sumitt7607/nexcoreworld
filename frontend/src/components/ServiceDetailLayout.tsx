import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CtaFooter } from "@/components/CtaFooter";
import { Check, ArrowRight, Zap, Rocket, Sparkles, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface ServiceDetailLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
}

export function ServiceDetailLayout({
  title,
  subtitle,
  description,
  icon,
  features,
  benefits,
  process
}: ServiceDetailLayoutProps) {
  return (
    <main className="min-h-screen bg-white text-slate-950 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#004ab0] text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c0ff33] blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white blur-[100px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold text-[#c0ff33] uppercase tracking-widest">
              {subtitle}
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              {title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-[#c0ff33] text-[#0f172a] font-bold uppercase tracking-wider rounded-xl hover:bg-white transition-colors shadow-lg">
                Get Started
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider rounded-xl hover:bg-white/10 transition-all">
                Case Studies
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20 flex items-center justify-center text-[#c0ff33] shadow-2xl relative">
              <div className="absolute inset-0 bg-[#c0ff33]/10 blur-3xl rounded-full" />
              {icon}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-950">Core Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                      <Check size={14} />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-950">Why Choose Our {title}?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex gap-6">
                    <div className="w-12 h-12 bg-[#004ab0]/10 text-[#004ab0] rounded-xl flex items-center justify-center shrink-0">
                      <Sparkles size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-950 mb-2">{benefit.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#0f172a] text-white p-10 rounded-[3rem] sticky top-32">
              <h3 className="text-2xl font-black uppercase mb-8">Our Process</h3>
              <div className="space-y-8">
                {process.map((p, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-xs font-bold text-[#c0ff33] uppercase tracking-widest mt-1">
                      {p.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{p.title}</h4>
                      <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-12 border-t border-white/5 text-center">
                <Link to="/contact" className="inline-flex items-center gap-2 text-[#c0ff33] font-bold uppercase tracking-widest text-xs hover:gap-3 transition-all">
                  Request a Consultation <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
