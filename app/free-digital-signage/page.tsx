import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, Check, DollarSign, Zap, Palette, Calendar, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Digital Signage Software — Start at No Cost',
  description: 'Start with free digital signage software. Create playlists, schedule content, and publish to screens in minutes. Upgrade anytime as you grow — no credit card required.',
  alternates: {
    canonical: 'https://digitalsigns.ai/free-digital-signage/',
  },
};

export default function FreeDigitalSignagePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100">

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Free Digital Signage Software",
            "provider": {
              "@type": "Organization",
              "name": "DigitalSigns.ai",
              "url": "https://digitalsigns.ai"
            },
            "areaServed": "Worldwide",
            "serviceType": "Digital Signage CMS",
            "url": "https://digitalsigns.ai/free-digital-signage/"
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-indigo-50/40 to-white border-b border-gray-100">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl opacity-60" />
        </div>

        <div className="max-w-[1120px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-indigo-100 rounded-full bg-white shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-gray-600 tracking-wide uppercase">Start Free • Upgrade Anytime</span>
              </div>

              <h1 className="font-headline text-4xl sm:text-5xl lg:text-[52px] leading-[1.1] font-bold text-gray-900 mb-6 tracking-tight">
                Free Digital Signage Software — Start at No Cost
              </h1>

              <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed max-w-[54ch]">
                Turn any TV or display into digital signage. Create playlists, schedule content, and publish to screens in minutes — then scale with simple per-screen pricing when you’re ready. No credit card required.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold h-12 px-8 rounded-xl shadow-lg shadow-blue-900/10 transition-transform hover:scale-105">
                  <a href="https://hub.digitalsigns.ai/signup">Get Started Free</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:text-gray-900 font-bold h-12 px-8 rounded-xl bg-white hover:bg-gray-50 transition-transform hover:scale-105">
                  <Link href="/how-it-works">See How It Works</Link>
                </Button>
              </div>

              <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Works with Android TV, Fire TV, and modern browsers.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-[24px] border border-gray-100 bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] bg-gray-100">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=70")' }}
                    role="img"
                    aria-label="Digital signage screen in a business environment"
                  />
                </div>
                <div className="mt-3 px-1">
                  <p className="text-center text-xs font-medium text-gray-400">Digital signage menu boards created using DigitalSigns.ai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Powerful, and Free to Start</h2>
            <p className="text-lg text-gray-500 max-w-3xl">
              Start without risk. Our free plan helps small businesses launch professional digital signage quickly — with the option to upgrade as your needs grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Check,
                color: "text-green-600",
                bg: "bg-green-50",
                title: "Free Plan Available",
                desc: "Ideal for cafés, retail, offices, schools, and startups testing digital signage."
              },
              {
                icon: DollarSign,
                color: "text-blue-600",
                bg: "bg-blue-50",
                title: "Simple Pricing",
                desc: "Start free. Add screens anytime with flat per-screen pricing as you scale."
              },
              {
                icon: Zap,
                color: "text-amber-600",
                bg: "bg-amber-50",
                title: "Easy, Flexible Setup",
                desc: "Use Fire TV, Android TV, or any modern web browser player — no special hardware."
              },
              {
                icon: Palette,
                color: "text-purple-600",
                bg: "bg-purple-50",
                title: "Templates Included",
                desc: "Menu boards, posters, promos, and announcements ready to customize."
              },
              {
                icon: Calendar,
                color: "text-rose-600",
                bg: "bg-rose-50",
                title: "Scheduling & Playlists",
                desc: "Automate content with scheduling, playlists, and quick updates from the cloud."
              },
              {
                icon: TrendingUp,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
                title: "Scalable Growth",
                desc: "Add more screens, storage, and advanced features as your business grows."
              }
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-[20px] border border-gray-100 bg-white hover:border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-6`}>
                  <card.icon className={`w-6 h-6 ${card.color}`} strokeWidth={2.5} />
                </div>
                <h3 className="font-headline text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-gray-900 mb-4">Start Free in Just 3 Steps</h2>
            <p className="text-lg text-gray-500">Go from signup to a live screen in minutes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "1", title: "Sign Up Free", desc: "Create your account at hub.digitalsigns.ai." },
              { num: "2", title: "Connect Your Screen", desc: "Pair your TV using our Fire TV or Android TV app — or open the web player in a browser." },
              { num: "3", title: "Upload & Schedule", desc: "Add your own images/videos or pick from our gallery, then schedule and publish." }
            ].map((step, i) => (
              <div key={i} className="relative bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm text-center group hover:shadow-lg transition-all">
                <div className="w-12 h-12 mx-auto rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h3 className="font-headline text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 font-medium">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold h-12 px-8 rounded-xl shadow-lg shadow-blue-900/10">
              <a href="https://hub.digitalsigns.ai/signup">Claim My Free Plan</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:text-gray-900 font-bold h-12 px-8 rounded-xl bg-white hover:bg-gray-50">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-4">Who Uses Free Digital Signage?</h2>
            <p className="text-gray-500 text-lg">Popular for quick wins like promotions, announcements, menus, and schedules.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Restaurants & Cafés — menu boards & promos",
              "Retail Stores — sales & seasonal offers",
              "Schools & Libraries — announcements",
              "Offices & Factories — dashboards & notices",
              "Events & Venues — wayfinding"
            ].map((item, i) => (
              <div key={i} className="px-5 py-3 rounded-full border border-gray-200 bg-white text-gray-800 font-bold text-sm shadow-sm hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors">
                {item.split('—')[0]} <span className="text-gray-400 font-normal">— {item.split('—')[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-headline text-3xl font-bold text-gray-900 mb-4">Free Templates to Get You Started</h2>
            <p className="text-gray-500 text-lg">Choose a design, customize text and images, and go live in minutes.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Restaurant Menu Board", color: "bg-orange-100" },
              { name: "Indian Biryani Menu", color: "bg-yellow-100" },
              { name: "Sandwich Combo Board", color: "bg-green-100" },
              { name: "Sandwich Poster", color: "bg-red-100" }
            ].map((tpl, i) => (
              <div key={i} className="bg-white rounded-[18px] overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all group cursor-pointer">
                <div className={`aspect-[4/3] w-full ${tpl.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 opacity-50 font-bold uppercase tracking-widest text-xs">
                    Template Preview
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100">
                  <h3 className="font-bold text-gray-900 text-sm group-hover:text-indigo-600 transition-colors">{tpl.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-gray-200 text-gray-700 hover:text-gray-900 font-bold h-11 px-6 rounded-xl bg-white hover:bg-gray-50">
              <Link href="/templates">Browse All Templates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
            <div>
              <h2 className="font-headline text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-500 text-lg">Quick answers about getting started with a free digital signage plan.</p>
            </div>

            <div className="space-y-4">
              {[
                { q: "Is there a free plan?", a: "Yes. DigitalSigns.ai offers a limited free plan so you can try digital signage at no cost. When you need more screens or advanced features, you can upgrade anytime." },
                { q: "Do I need special hardware?", a: "No. You can run DigitalSigns.ai using Fire TV, Android TV devices, or a modern browser web player." },
                { q: "Can I upload my own content?", a: "Yes. Upload images and videos, build playlists, and schedule content for different times and days." },
                { q: "What if I need more screens?", a: "You can add screens anytime with simple per-screen pricing. Visit the pricing page for current plan details." }
              ].map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-[16px] p-6 hover:border-indigo-100 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="bg-[#0B1220] rounded-[32px] p-8 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-indigo-900/20 to-transparent pointer-events-none" />

            <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 items-center relative z-10">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-6">Start Free Digital Signage Today</h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  Start with a free digital signage plan and upgrade only if you need more screens or features. No credit card required to begin.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-end gap-4">
                <Button asChild size="lg" className="bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold h-12 px-8 rounded-xl shadow-lg">
                  <a href="https://hub.digitalsigns.ai/signup">Get Started Free</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:text-white font-bold h-12 px-8 rounded-xl hover:bg-white/10 hover:border-white/40">
                  <Link href="/demo">See Live Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
