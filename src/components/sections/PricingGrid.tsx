'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function PricingGrid() {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

    const plans = [
        {
            name: "Free",
            description: "Perfect for testing and small businesses.",
            price: "$0",
            period: "/ forever",
            billingText: "No credit card required",
            features: [
                "2 Screens Included",
                "Unlimited Content Uploads",
                "Cloud Media Library",
                "Standard Support",
                "Core Apps Included"
            ],
            cta: "Get Started for Free",
            href: "https://hub.digitalsigns.ai/signup",
            variant: "outline",
            popular: false
        },
        {
            name: "Pro",
            description: "For scaling businesses needing professional power.",
            price: billingCycle === 'yearly' ? "$5" : "$6",
            period: "/ screen / month",
            billingText: billingCycle === 'yearly' ? "Billed annually" : "Billed monthly",
            features: [
                "Unlimited Screens",
                "Advanced Scheduling",
                "Custom Templates",
                "Priority Support",
                "No 'Powered By' Branding",
                "Advanced User Roles",
                "Proof of Play Reports"
            ],
            cta: "Start 14-Day Free Trial",
            href: "https://hub.digitalsigns.ai/signup",
            variant: "default",
            popular: true
        }
    ];

    return (
        <div className="w-full max-w-5xl mx-auto px-4">
            {/* Toggle */}
            <div className="flex justify-center mb-12">
                <div className="bg-gray-100 p-1 rounded-full inline-flex items-center relative">
                    <button
                        onClick={() => setBillingCycle('monthly')}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 z-10",
                            billingCycle === 'monthly' ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-gray-900"
                        )}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBillingCycle('yearly')}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 z-10 flex items-center gap-2",
                            billingCycle === 'yearly' ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-gray-900"
                        )}
                    >
                        Yearly
                        <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-extrabold uppercase tracking-wide">
                            Save 17%
                        </span>
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={cn(
                            "relative flex flex-col p-8 rounded-2xl border transition-all duration-300",
                            plan.popular
                                ? "border-[#2B7CD3] shadow-lg shadow-blue-900/5 bg-white scale-100 md:scale-105 z-10"
                                : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                        )}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <span className="bg-[#2B7CD3] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </span>
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="font-headline text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{plan.description}</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-bold text-gray-900 tracking-tight">{plan.price}</span>
                                <span className="text-gray-500 font-medium text-sm">{plan.period}</span>
                            </div>
                            <p className="text-xs text-gray-400 mt-2 font-medium uppercase tracking-wide">
                                {plan.billingText}
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3">
                                    <div className={cn(
                                        "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                                        plan.popular ? "bg-blue-50" : "bg-gray-100"
                                    )}>
                                        <Check className={cn(
                                            "w-3 h-3",
                                            plan.popular ? "text-[#2B7CD3]" : "text-gray-500"
                                        )} />
                                    </div>
                                    <span className="text-gray-600 text-sm font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            asChild
                            size="lg"
                            className={cn(
                                "w-full h-12 rounded-xl text-base font-bold transition-all",
                                plan.popular
                                    ? "bg-[#2B7CD3] hover:bg-[#246BB5] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                    : "bg-gray-900 text-white hover:bg-gray-800"
                            )}
                        >
                            <a href={plan.href}>{plan.cta}</a>
                        </Button>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <p className="text-gray-500 text-sm">
                    Need a custom enterprise plan? <a href="https://wa.me/12263360773" className="text-[#2B7CD3] font-bold hover:underline">Contact Sales</a>
                </p>
            </div>
        </div>
    );
}
