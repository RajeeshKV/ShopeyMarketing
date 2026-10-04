import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What exactly do I get with Shopey?',
    a: "You get a fully built, production-ready ecommerce store — storefront, admin dashboard, payments, customer accounts, order management, email and SMS notifications. Everything is set up and deployed for you. You just add your products and start selling.",
  },
  {
    q: 'Is the ₹10,000 really a one-time payment?',
    a: "Yes. ₹10,000 is the one-time fee for the Starter plan. There is no monthly platform subscription. You will have standard hosting costs (server, domain) and any third-party service fees (e.g. Razorpay transaction fees), but those are direct to those providers — not to us.",
  },
  {
    q: 'What does "lifetime support" mean?',
    a: "We support the store we deliver to you — bug fixes, questions, and guidance — without time limits. Additional feature development or custom changes are billed separately based on scope.",
  },
  {
    q: 'Can I customise the design and branding?',
    a: "The Starter plan includes your logo and basic branding. Deeper design customisation, custom features, or unique integrations are available under the Custom plan or as add-on work.",
  },
  {
    q: 'How long does it take to get my store?',
    a: "Typically 1–2 weeks from the time we have your branding assets and product catalogue. Custom plans with larger scopes take longer and will be scoped with you during the consultation.",
  },
  {
    q: 'What payment methods does it support?',
    a: "Shopey uses Razorpay, which supports credit cards, debit cards, UPI, net banking, wallets and EMI — covering the full range of Indian payment methods.",
  },
  {
    q: 'Do I own my store after purchase?',
    a: "Yes. The store is deployed for your business. You can request full source access. We can also assist with a self-hosted setup if required.",
  },
  {
    q: 'Can I see the store before buying?',
    a: "Absolutely. The live demo at app.shopey.tech shows a working Shopey store with real functionality — browse products, add to cart, and see the checkout flow.",
  },
];

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-neutral-200 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-4 text-left group"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors">
          {q}
        </span>
        <span className="shrink-0 mt-0.5 text-neutral-400">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      {open && (
        <p className="text-sm text-neutral-500 leading-relaxed pb-4">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              Common questions
            </h2>
            <p className="mt-3 text-neutral-500 text-sm leading-relaxed">
              Still have questions? Email us at{' '}
              <a href="mailto:hello@shopey.tech" className="text-neutral-900 underline hover:no-underline">
                hello@shopey.tech
              </a>
            </p>
          </div>

          {/* Right */}
          <div className="divide-y-0">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
