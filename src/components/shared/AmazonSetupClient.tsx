'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
    ChevronRight,
    Check,
    Monitor,
    Wifi,
    Hash,
    ExternalLink,
    Download,
    Smartphone,
    HelpCircle,
    Info
} from 'lucide-react';

const steps = [
    {
        title: "1. Connect and power on the Amazon Signage Stick",
        desc: "Plug the Amazon Signage Stick into an available HDMI port on your monitor. Connect the included power cable and plug it into an outlet. Ensure your monitor is set to the correct HDMI input.",
        note: "We recommend using the provided power adapter into a wall outlet rather than a USB port on the TV for stability.",
        imageHint: "Signage stick connected to HDMI and power"
    },
    {
        title: "2. Choose language and connect to Wi-Fi",
        desc: "When the device powers on, follow the on-screen instructions to select your preferred language. Scan for your Wi-Fi network and enter the password. Ensure your internet connection is stable.",
        imageHint: "Language selection screen on TV"
    },
    {
        title: "3. Note the pairing code displayed on the Signage Stick",
        desc: "Once your internet connection is active, the Amazon Signage Stick will display a unique 6-character code. You will need this for the next part of the process.",
        note: "Keep this screen active while you proceed to a smartphone or computer.",
        imageHint: "Pairing code screen (e.g., nebyzx)"
    },
    {
        title: "4. Open the Amazon Signage Manager console",
        desc: "On a nearby device (tablet, smartphone, or laptop), visit the Amazon Signage Manager website at signage.amazon.com. Log in with the same Amazon account used when purchasing.",
        link: { label: "Go to Amazon Signage Manager", href: "https://signage.amazon.com" },
        imageHint: "Amazon Signage Manager login/welcome screen"
    },
    {
        title: "5. Enter the pairing code and select DigitalSigns.ai as your CMS",
        desc: "In the Amazon Signage Manager, select 'Add New Device'. Enter the 6-character code displayed on your screen. When prompted to select a CMS, choose DigitalSigns.ai from the list of available partners.",
        note: "Choosing DigitalSigns.ai ensures the player app is automatically installed and configured correctly.",
        imageHint: "CMS selection screen with DigitalSigns.ai highlighted"
    },
    {
        title: "6. Wait for the DigitalSigns.ai player to install",
        desc: "Once registered, the Amazon Signage Stick will begin downloading and installing the DigitalSigns.ai player app. This should take only a minute or two depending on your connection.",
        imageHint: "Download/Installation progress screen"
    },
    {
        title: "7. Pair the device inside DShub and publish content",
        desc: "Log in to your DigitalSigns.ai (DShub) account. Go to the 'Screens' section and click 'Add New Screen.' Enter the pairing code shown on your TV to link the Amazon Signage Stick to your account.",
        link: { label: "Sign in to DShub", href: "https://hub.digitalsigns.ai/" },
        imageHint: "DShub dashboard pairing screen"
    },
    {
        title: "8. Set up and monitor devices with the Amazon Signage mobile app",
        desc: "Download the Amazon Signage mobile app to monitor your screens on the go. You can add new devices, check online/offline status, and group devices by location.",
        note: "For detailed cloud management of content, always use the main DigitalSigns.ai (DShub) Dashboard.",
        imageHint: "Amazon Signage mobile app interface"
    }
];

export function AmazonSetupClient() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
            <section className="py-16 bg-white">
                <div className="max-w-[1000px] mx-auto px-6">
                    <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 mb-6">
                        <Link href="/" className="hover:text-[#2B7CD3] transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                        <Link href="/amazon-signage-stick" className="hover:text-[#2B7CD3] transition-colors">Amazon Signage Stick</Link>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                        <span className="text-[#2B7CD3]">Setup Guide</span>
                    </div>

                    <h1 className="font-headline text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        How to Set Up Amazon Signage Stick With DigitalSigns.ai (DShub)
                    </h1>
                    <p className="text-lg text-gray-500 leading-relaxed max-w-3xl mb-12">
                        This step-by-step guide will help you pair your Amazon Signage Stick with DigitalSigns.ai (DShub), so you can start publishing digital signage content in just a few minutes.
                    </p>

                    <div className="grid md:grid-cols-[1.5fr_1fr] gap-12">
                        {/* What You Need */}
                        <div className="bg-gray-50 rounded-[32px] p-8 md:p-10 border border-gray-100 shadow-sm">
                            <h2 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                                <Info className="w-5 h-5 text-blue-500" />
                                What You Need
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "An Amazon Signage Stick with the bundled power adapter.",
                                    "A TV or commercial display with an available HDMI port.",
                                    "A stable internet connection.",
                                    "An Amazon account (required for device registration).",
                                    "Your DigitalSigns.ai (DShub) account login.",
                                    "A smartphone or computer (to access the Amazon Signage Manager)."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[15px] text-gray-600 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* In This Guide */}
                        <div className="bg-[#FFF9ED] rounded-[32px] p-8 md:p-10 border border-[#FDF6D6] shadow-sm">
                            <h2 className="font-bold text-xl text-gray-900 mb-6">In This Guide</h2>
                            <ul className="space-y-3">
                                {steps.map((step, i) => (
                                    <li key={i}>
                                        <a href={`#step-${i + 1}`} className="text-[14px] font-bold text-[#A67D28] hover:underline flex items-start gap-2">
                                            <span className="shrink-0">{i + 1}.</span>
                                            {step.title.split('. ')[1]}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps */}
            <section className="pb-24 bg-white">
                <div className="max-w-[1000px] mx-auto px-6 space-y-20">
                    {steps.map((step, i) => (
                        <div key={i} id={`step-${i + 1}`} className="scroll-mt-24 group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-full bg-[#FF9900] flex items-center justify-center text-white font-black text-sm shadow-md">
                                    {i + 1}
                                </div>
                                <h2 className="font-headline text-2xl font-bold text-gray-900">{step.title.split('. ')[1]}</h2>
                            </div>

                            <div className="bg-white rounded-[40px] border border-gray-100 p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500">
                                <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
                                    <div>
                                        <p className="text-[17px] text-gray-600 leading-relaxed font-medium mb-8">
                                            {step.desc}
                                        </p>

                                        {step.link && (
                                            <Button asChild className="bg-[#FF9900] hover:bg-[#e68a00] text-black font-bold h-10 px-6 rounded-full text-xs mb-8 transition-all">
                                                <a href={step.link.href} target={step.link.href.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer" className="flex items-center gap-2">
                                                    {step.link.label}
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            </Button>
                                        )}

                                        {step.note && (
                                            <div className="p-4 bg-gray-50 rounded-2xl border-l-4 border-[#FF9900] text-sm text-gray-500 font-medium">
                                                <span className="font-bold text-gray-900 block mb-1">Note:</span>
                                                {step.note}
                                            </div>
                                        )}
                                    </div>

                                    <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 group-hover:border-[#FF9900]/30 transition-colors">
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 p-8 text-center">
                                            <Monitor className="w-12 h-12 mb-4 opacity-20" />
                                            <p className="text-xs font-bold uppercase tracking-widest">{step.imageHint}</p>
                                        </div>
                                        {/* Future Image Component here */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Maintenance */}
            <section className="py-24 bg-[#FFF9ED] border-t border-[#FDF6D6]">
                <div className="max-w-[1000px] mx-auto px-6">
                    <div className="bg-white rounded-[48px] p-10 md:p-16 border border-[#FDF6D6] shadow-sm">
                        <h2 className="font-headline text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <HelpCircle className="w-8 h-8 text-[#FF9900]" />
                            Maintenance & Troubleshooting
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12">
                            <ul className="space-y-6">
                                {[
                                    { title: "Power Supply", desc: "Ensure the stick has a stable power supply; if the screen flickers or resets, check the power adapter." },
                                    { title: "Firmware Updates", desc: "Keep the device firmware up to date through the Amazon Signage Manager." }
                                ].map((item, i) => (
                                    <li key={i}>
                                        <h3 className="font-bold text-gray-900 text-[15px] mb-2">{item.title}</h3>
                                        <p className="text-[14px] text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-6">
                                {[
                                    { title: "Pairing issues", desc: "Verify that both the stick and your pairing device have active cloud connections." },
                                    { title: "Support", desc: "Visit our Help Center or contact support if you encounter persistent issues." }
                                ].map((item, i) => (
                                    <li key={i}>
                                        <h3 className="font-bold text-gray-900 text-[15px] mb-2">{item.title}</h3>
                                        <p className="text-[14px] text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-12 pt-12 border-t border-gray-100 text-center">
                            <p className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest leading-relaxed">
                                For more help, visit our <Link href="#" className="text-[#FF9900] hover:underline">Help Center</Link> or contact support.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Footer CTA */}
            <section className="py-24 bg-[#0b1220] text-white">
                <div className="max-w-[1000px] mx-auto px-6 text-center">
                    <h2 className="font-headline text-3xl font-bold mb-6">Need more help setting up?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Our team is here to ensure your Amazon Signage Stick implementation is successful.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button asChild className="bg-[#FF9900] hover:bg-[#e68a00] text-black font-black h-12 px-8 rounded-full transition-all">
                            <Link href="/contact">Contact Support</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
