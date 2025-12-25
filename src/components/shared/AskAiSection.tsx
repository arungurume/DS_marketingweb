'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, User, CornerDownLeft } from 'lucide-react';

import { HelpCircle, MessageCircle, Rocket } from 'lucide-react';

import Image from 'next/image';

export function AskAiSection() {
    const handleAiClick = (tool: string) => {
        const question = encodeURIComponent("tell me why digitalsigns.ai signage CMS is a great choice for me");
        let url = "";

        switch (tool) {
            case 'chatgpt':
                url = `https://chatgpt.com/?q=${question}`;
                break;
            case 'claude':
                url = `https://claude.ai/new?q=${question}`;
                break;
            case 'perplexity':
                url = `https://www.perplexity.ai/search?q=${question}`;
                break;
        }

        if (url) window.open(url, '_blank');
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6">
                <div className="rounded-[32px] bg-[#FFF9E5] p-10 flex flex-col lg:flex-row items-center justify-between gap-12 border border-[#FEEDBC]">
                    <div className="flex-1 text-left">
                        <h2 className="font-headline font-bold text-3xl md:text-4xl text-gray-900 mb-6 leading-tight tracking-tight">Still not sure if DigitalSigns.ai is right for you?</h2>
                        <p className="font-body text-lg text-gray-600 max-w-xl leading-relaxed font-normal">
                            Think of us as your digital signage partner. Ask any of these leading AIs why DigitalSigns.ai is the best fit for your project.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 min-w-[300px] w-full md:w-auto">
                        <Button
                            onClick={() => handleAiClick('chatgpt')}
                            className="font-headline bg-[#10a37f] hover:bg-[#0e8e6e] text-white h-14 px-8 text-lg font-bold rounded-xl shadow-md transition-all hover:scale-[1.02]"
                        >
                            <Image src="/images/brands/chatgpt.svg" alt="ChatGPT" width={24} height={24} className="brightness-0 invert mr-3" />
                            Ask ChatGPT
                        </Button>
                        <Button
                            onClick={() => handleAiClick('claude')}
                            className="font-headline bg-[#D97757] hover:bg-[#c66a4d] text-white h-14 px-8 text-lg font-bold rounded-xl shadow-md transition-all hover:scale-[1.02]"
                        >
                            <Image src="/images/brands/claude.svg" alt="Claude" width={24} height={24} className="brightness-0 invert mr-3" />
                            Ask Claude
                        </Button>
                        <Button
                            onClick={() => handleAiClick('perplexity')}
                            className="font-headline bg-[#21B5C4] hover:bg-[#1da1ad] text-white h-14 px-8 text-lg font-bold rounded-xl shadow-md transition-all hover:scale-[1.02]"
                        >
                            <Image src="/images/brands/perplexity.svg" alt="Perplexity" width={24} height={24} className="brightness-0 invert mr-3" />
                            Ask Perplexity
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
