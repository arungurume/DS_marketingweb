'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Cookie, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000); // Delay for better UX
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={cn(
            "fixed bottom-6 left-6 right-6 md:right-auto md:left-10 md:w-[400px] z-[100] transition-all duration-500 transform translate-y-0",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}>
            <div className="bg-white/95 backdrop-blur-xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="bg-[#2B7CD3]/10 p-2.5 rounded-xl">
                        <Cookie className="h-6 w-6 text-[#2B7CD3]" />
                    </div>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <h3 className="font-headline font-bold text-lg text-gray-900 mb-2">
                    We use cookies
                </h3>

                <p className="font-body text-[14px] text-gray-500 leading-relaxed mb-6 font-normal">
                    We use cookies to improve your experience, analyze site usage, and personalize content.
                    See our <Link href="/privacy-policy" className="text-[#2B7CD3] hover:underline">Privacy Policy</Link> for details.
                </p>

                <div className="flex gap-3">
                    <Button
                        onClick={handleAccept}
                        className="flex-1 bg-[#2B7CD3] hover:bg-[#246BB5] text-white font-bold h-11 rounded-xl shadow-lg shadow-blue-500/10 transition-transform hover:scale-[1.02]"
                    >
                        Accept All
                    </Button>
                    <Button
                        variant="outline"
                        onClick={handleDecline}
                        className="flex-1 border-gray-200 text-gray-700 font-bold h-11 rounded-xl hover:bg-gray-50 transition-transform hover:scale-[1.02]"
                    >
                        Decline
                    </Button>
                </div>
            </div>
        </div>
    );
}
