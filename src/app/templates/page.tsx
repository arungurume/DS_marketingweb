import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { SITE_NAME } from '@/lib/constants';
import { Tv, Layout, Utensils, ShoppingBag, Briefcase, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Digital Signage Templates | Professional Layouts for Any Screen',
    description: 'Boost your brand with professional digital signage templates. Custom designs for QSR, retail, corporate, and more. Launching soon at DigitalSigns.ai.',
};

const categories = [
    {
        title: 'Restaurant & QSR',
        description: 'Dynamic menu boards, daily specials, and mouth-watering food displays.',
        icon: Utensils,
        color: 'bg-orange-100 text-orange-600',
    },
    {
        title: 'Retail & Fashion',
        description: 'Product showcases, seasonal sales, and interactive storefront displays.',
        icon: ShoppingBag,
        color: 'bg-blue-100 text-blue-600',
    },
    {
        title: 'Corporate & Office',
        description: 'Internal communications, meeting room schedules, and company news.',
        icon: Briefcase,
        color: 'bg-indigo-100 text-indigo-600',
    },
    {
        title: 'Custom Layouts',
        description: 'Flexible grid systems and multi-zone layouts for complex viewing needs.',
        icon: Layout,
        color: 'bg-purple-100 text-purple-600',
    },
];

export default function TemplatesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <Sparkles className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-blue-700 tracking-tight">Launching Soon</span>
                        </div>
                        <h1 className="font-headline text-5xl md:text-6xl lg:text-[68px] font-semibold tracking-tight text-gray-900 leading-[1.1] mb-8">
                            Professional Digital <br />
                            <span className="text-blue-600">Signage Templates</span>
                        </h1>
                        <p className="font-body text-xl text-gray-500 leading-relaxed mb-10">
                            Transform your screens with stunning, ready-to-use templates designed for high impact.
                            Our upcoming library will feature hundreds of customizable layouts tailored for every industry.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 text-lg font-normal rounded-lg">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Get Started Free</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Templates Section */}
            <section className="bg-slate-50 py-24 border-y border-slate-100">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
                                Designed for SEO, Optimized for Conversion
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We believe that digital signage should be more than just pretty pictures. That's why our
                                templates are built from the ground up to drive results:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-blue-600 rounded-full p-1 leading-none shadow-sm shadow-blue-200">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-900 leading-none">Instant Brand Alignment:</span>
                                        <p className="text-gray-600 text-[15px] mt-1">Easily update colors, logos, and fonts to match your visual identity.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-blue-600 rounded-full p-1 leading-none shadow-sm shadow-blue-200">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-900 leading-none">Canva-Powered Editing:</span>
                                        <p className="text-gray-600 text-[15px] mt-1">Directly edit your content using the tools you already know and love.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-blue-600 rounded-full p-1 leading-none shadow-sm shadow-blue-200">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-900 leading-none">AI-Generated Content:</span>
                                        <p className="text-gray-600 text-[15px] mt-1">Use our AI tools to generate copy and images for your displays in seconds.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="aspect-video bg-white rounded-2xl shadow-2xl shadow-blue-200/50 border border-slate-100 flex items-center justify-center overflow-hidden">
                                <div className="text-center p-8">
                                    <Tv className="w-16 h-16 text-blue-600 mx-auto mb-4 opacity-20" />
                                    <p className="text-blue-900 font-medium">Coming Soon</p>
                                    <p className="text-blue-500 text-sm mt-1">Template Preview Library</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-600/5 blur-3xl rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Template Categories Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
                            A Template for Every Need
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            We're building a massive collection of templates across multiple categories.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((category, index) => (
                            <div key={index} className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <category.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                                <p className="text-gray-500 text-[15px] leading-relaxed">
                                    {category.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-12 rounded-3xl bg-blue-600 relative overflow-hidden text-center text-white">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Want to be the first to know?</h2>
                            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto font-light">
                                Sign up for a free account today and we'll notify you as soon as the full template library launches.
                            </p>
                            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-white/90 h-14 px-10 text-lg font-medium rounded-xl transition-all hover:scale-105">
                                <a href="https://hub.digitalsigns.ai/#/usermanagement/signup">Sign Up Free</a>
                            </Button>
                        </div>
                        {/* Abstract Background Shapes */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
