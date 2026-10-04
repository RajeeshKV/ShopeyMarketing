import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-neutral-900">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
          Ready to launch?
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Your store is ready to go.
        </h2>
        <p className="text-neutral-400 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
          Starting at ₹10,000 — one-time. No subscriptions, no surprises. Just a store that works.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:hello@shopey.tech?subject=I%20want%20a%20Shopey%20Store"
            className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            Get Your Store
            <ArrowRight size={15} />
          </a>
          <a
            href="https://app.shopey.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-neutral-700 text-neutral-300 font-medium text-sm px-6 py-3 rounded-lg hover:border-neutral-500 hover:text-white transition-colors"
          >
            View Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}
