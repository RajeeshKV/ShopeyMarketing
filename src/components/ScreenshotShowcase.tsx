import { ArrowRight } from 'lucide-react';

export default function ScreenshotShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2">Live demo</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              See it in action
            </h2>
            <p className="mt-3 text-neutral-500 max-w-lg">
              A real working store, with products, cart, checkout and admin — live right now.
            </p>
          </div>
          <a
            href="https://app.shopey.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white font-medium text-sm px-4 py-2.5 rounded-lg hover:bg-neutral-700 transition-colors whitespace-nowrap shrink-0"
          >
            View Live Demo
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Screenshots */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-start">
          {/* Desktop screenshot */}
          <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg bg-white">
            {/* Browser chrome */}
            <div className="bg-neutral-100 border-b border-neutral-200 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white border border-neutral-200 rounded-md px-3 py-0.5 text-xs text-neutral-400 font-mono w-48 text-center">
                  app.shopey.tech
                </div>
              </div>
            </div>
            <img
              src="/demo-site-web.png"
              alt="Shopey ecommerce store — desktop view"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>

          {/* Mobile screenshot */}
          <div className="mx-auto lg:mx-0 w-48 shrink-0">
            <div className="rounded-[28px] overflow-hidden border-4 border-neutral-900 shadow-xl bg-neutral-900">
              {/* Phone notch */}
              <div className="bg-neutral-900 h-5 flex items-center justify-center">
                <div className="w-16 h-1 rounded-full bg-neutral-700" />
              </div>
              <img
                src="/demo-site-mobile.png"
                alt="Shopey ecommerce store — mobile view"
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="bg-neutral-900 h-4 flex items-center justify-center">
                <div className="w-8 h-0.5 rounded-full bg-neutral-700" />
              </div>
            </div>
            <p className="text-center text-xs text-neutral-400 mt-3 font-medium">Mobile-ready</p>
          </div>
        </div>
      </div>
    </section>
  );
}
