'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MonitorSmartphone, Upload, Tv } from 'lucide-react';

export function SetupSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Easy Setup
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get Started in 3 Simple Steps
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our intuitive platform makes it a breeze to set up and manage your
              digital signage. No technical expertise required.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card>
            <CardHeader>
              <MonitorSmartphone className="w-8 h-8 mx-auto" />
              <CardTitle className="text-center">Connect Your Screen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Use any modern TV or monitor. No special hardware needed.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Upload className="w-8 h-8 mx-auto" />
              <CardTitle className="text-center">Upload Your Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Easily upload images, videos, and more to your dashboard.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Tv className="w-8 h-8 mx-auto" />
              <CardTitle className="text-center">Go Live</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Your content is instantly displayed on your connected screens.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
