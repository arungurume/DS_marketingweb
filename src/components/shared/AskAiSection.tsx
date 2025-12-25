'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, CornerDownLeft } from 'lucide-react';

export function AskAiSection() {
    return (
        <section className="py-16 sm:py-24">
            <div className="container max-w-2xl mx-auto">
                <div className="rounded-xl border bg-accent/20 p-8 text-center shadow-lg">
                    <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">Still not sure if DigitalSigns.ai is right for you?</h2>
                    <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                        I'm Charlie, a frequently asked questions bot for DigitalSigns.ai. I'm still learning, so please forgive me if I'm not perfect. Ask me what your business is and I'll give you a few ideas about beginning with us.
                    </p>
                    <div className="mt-6 flex flex-col gap-4 max-w-lg mx-auto">
                        <div className="flex items-start gap-4 text-left">
                            <div className="p-2 rounded-full bg-primary/20 border border-primary/40">
                                <Bot className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1 p-3 rounded-lg bg-background border">
                                <p className="font-medium text-sm">Ask me anything!</p>
                            </div>
                        </div>
                        <form className="relative">
                            <Input 
                                placeholder="I own a coffee shop..." 
                                className="pr-12 h-11" 
                            />
                            <Button type="submit" size="icon" className="absolute top-1/2 right-1.5 -translate-y-1/2 h-8 w-8">
                                <CornerDownLeft className="h-4 w-4" />
                                <span className="sr-only">Submit</span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
