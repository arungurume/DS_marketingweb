import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SITE_NAME } from '@/lib/constants';
import { ChatGptIcon } from '../icons/ChatGptIcon';
import { ClaudeIcon } from '../icons/ClaudeIcon';
import { PerplexityIcon } from '../icons/PerplexityIcon';

const aiServices = [
  {
    name: 'ChatGPT',
    icon: ChatGptIcon,
    href: `https://chatgpt.com/?q=tell+me+why+${encodeURIComponent(SITE_NAME)}+is+a+great+choice+for+me`,
    variant: 'outline' as const,
  },
  {
    name: 'Claude',
    icon: ClaudeIcon,
    href: `https://claude.ai/chats?q=tell+me+why+${encodeURIComponent(SITE_NAME)}+is+a+great+choice+for+me`,
    variant: 'default' as const,
  },
  {
    name: 'Perplexity',
    icon: PerplexityIcon,
    href: `https://www.perplexity.ai/?q=tell+me+why+${encodeURIComponent(SITE_NAME)}+is+a+great+choice+for+me`,
    variant: 'secondary' as const,
  },
];

export function AskAiSection() {
  const question = `tell me why ${SITE_NAME} signage cms is a great choice for me`;

  const serviceLinks = [
    {
      name: 'ChatGPT',
      icon: ChatGptIcon,
      href: `https://chatgpt.com/?q=${encodeURIComponent(question)}`,
      variant: 'outline' as const,
      className: 'bg-white text-black hover:bg-gray-200 border-gray-300',
    },
    {
      name: 'Claude',
      icon: ClaudeIcon,
      href: `https://claude.ai/chats?q=${encodeURIComponent(question)}`,
      variant: 'default' as const,
      className: 'bg-[#D97757] hover:bg-[#D97757]/90 text-white',
    },
    {
      name: 'Perplexity',
      icon: PerplexityIcon,
      href: `https://www.perplexity.ai/?q=${encodeURIComponent(question)}`,
      variant: 'default' as const,
      className: 'bg-[#42A599] hover:bg-[#42A599]/90 text-white',
    },
  ];

  return (
    <section className="py-20 sm:py-32">
      <div className="container">
        <div className="bg-amber-100 rounded-2xl p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-black">
              <h2 className="font-headline text-3xl sm:text-4xl font-bold">
                Still not sure if {SITE_NAME} is right for you?
              </h2>
              <p className="mt-4 text-lg text-black/70">
                Let ChatGPT, Claude, or Perplexity do the thinking for you.
                Click a button and see what your favorite AI says about {SITE_NAME}.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {serviceLinks.map((service) => (
                <Button
                  key={service.name}
                  asChild
                  size="lg"
                  className={service.className}
                >
                  <Link href={service.href} target="_blank">
                    <service.icon className="mr-2" />
                    Ask {service.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
