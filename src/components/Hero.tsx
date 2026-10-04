import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-neutral-100 border border-neutral-200 rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
            <span className="text-xs font-medium text-neutral-600 tracking-wide">Pre-built · No monthly subscription</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.1] tracking-tight mb-5">
            Your ecommerce store,{' '}
            <span className="text-neutral-500">ready to launch.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg text-neutral-500 leading-relaxed mb-8 max-w-xl">
            Shopey is a fully-built online store for small businesses. One-time payment starting at{' '}
            <span className="font-semibold text-neutral-800">₹10,000</span>. No platform subscription. Lifetime support.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="#pricing"
              onClick={(e) => { e.preventDefault(); document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-neutral-900 text-white font-medium text-sm px-5 py-3 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              Get Your Store
              <ArrowRight size={15} />
            </a>
            <a
              href="https://app.shopey.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-700 font-medium text-sm px-5 py-3 rounded-lg hover:bg-neutral-50 transition-colors"
            >
              <Play size={13} className="fill-neutral-700" />
              View Live Demo
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap gap-5 mt-10">
            {[
              'One-time payment',
              'Lifetime support',
              'Admin dashboard',
              'Mobile-ready',
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-xs text-neutral-500">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6l2.5 2.5L10 3.5" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
