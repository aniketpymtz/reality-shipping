import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const newsItems = [
  {
    title: "Reality Shipping Expands Operations to Southeast Asia",
    excerpt: "Our new offices in Singapore and Jakarta strengthen our presence across the Asia-Pacific region, offering enhanced port agency and logistics services.",
    date: "March 2026",
    category: "Expansion",
    image: "https://images.unsplash.com/photo-1536697246787-1f7ae568714d?w=600&q=80",
  },
  {
    title: "New Partnership with Leading European Carrier",
    excerpt: "Strategic alliance with major European shipping line to provide integrated door-to-door solutions across Mediterranean trade routes.",
    date: "February 2026",
    category: "Partnership",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
  },
  {
    title: "Annual Maritime Industry Conference 2026",
    excerpt: "Join us at the Global Maritime Summit in Hamburg where our team will showcase innovative logistics solutions and industry insights.",
    date: "April 2026",
    category: "Event",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
];

export default function HomeNewsPreview() {
  return (
    <section className="py-24 bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="divider-gold" />
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
                Latest Updates
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              News & Events
            </h2>
          </div>
          <Link
            href="/news"
            className="hidden sm:inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-blue/80 transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* News grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Link
              key={item.title}
              href="/news"
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-blue text-white">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold"
          >
            View All News & Events
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
