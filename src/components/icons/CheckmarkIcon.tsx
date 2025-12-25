
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

export const CheckmarkIcon = ({ val }: { val: boolean | null | undefined }) => {
    if (val === true) {
        return <Check className="h-5 w-5 text-green-500" />;
    }
    return <X className="h-5 w-5 text-red-500" />;
};
