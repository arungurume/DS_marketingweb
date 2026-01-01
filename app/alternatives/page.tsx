import { Metadata } from 'next';
import Link from 'next/link';
import { alternativesData } from '@/data/alternatives.data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Digital Signage Software Alternatives | Compare DigitalSigns.ai',
    description: 'Compare DigitalSigns.ai with top digital signage software alternatives. See why businesses are switching to the modern, faster choice.',
    alternates: {
        canonical: 'https://digitalsigns.ai/alternatives/',
    },
};

export default function AlternativesIndexPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100">
            {/* Hero */}
            <section className="pt-32 pb-20 bg-gray-50 border-b border-gray-100">
                <div className="max-w-[1240px] mx-auto px-6 text-center">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                        Compare Digital Signage Alternatives
                    </h1>
                    <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        See how DigitalSigns.ai stacks up against other platforms.
                        Discover why modern teams are switching for speed, simplicity, and better hardware support.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="py-20">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {alternativesData.map((competitor) => (
                            <Link
                                key={competitor.slug}
                                href={`/alternatives/${competitor.slug}`}
                                className="group bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="font-headline text-2xl font-bold text-gray-900 group-hover:text-[#2B7CD3] transition-colors">
                                        {competitor.brand}
                                    </h2>
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#F0F7FF] transition-colors">
                                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#2B7CD3]" />
                                    </div>
                                </div>

                                <p className="text-gray-500 mb-6 flex-grow leading-relaxed">
                                    {competitor.intro.split('.')[0]}.
                                </p>

                                <div className="pt-6 border-t border-gray-50">
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Best For</p>
                                    <p className="text-gray-700 font-medium text-sm">
                                        {competitor.competitorBestFor}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
