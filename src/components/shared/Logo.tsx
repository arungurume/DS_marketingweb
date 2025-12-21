import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => (
  <div className={cn("font-headline font-bold text-2xl tracking-tighter", className)}>
    <span>.DS</span>
    <span className="text-primary">.</span>
  </div>
);

export default Logo;
