import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '₹10,000',
    priceNote: 'one-time',
    desc: 'Everything you need to launch your store.',
    highlight: false,
    cta: 'Get Started',
    features: [
      'Full storefront (up to 100 products)',
      'Mobile-responsive design',
      'Razorpay payment integration',
      'Admin dashboard',
      'Google Authentication',
      'Order & customer management',
      'Email notifications (Brevo)',
      'SMS order alerts',
      'Cloudinary image hosting',
      'Lifetime support',
    ],
  },
  {
    name: 'Custom',
    price: 'Custom',
    priceNote: 'tailored quote',
    desc: 'For stores with specific requirements or larger catalogs.',
    highlight: true,
    cta: 'Talk to Us',
    features: [
      'Everything in Starter',
      'Unlimited products',
      'Custom design & branding',
      'Additional feature development',
      'Priority support',
      'Custom integrations',
      'Multi-currency / multi-language',
      'Dedicated onboarding',
    ],
  },
];

const included = [
  'No monthly platform fee',
  'No per-transaction cut',
  'Full source access on request',
  'Hosted & deployed for you',
  'Additional changes billed separately',
];

export default function Pricing() {
  const handleContact = () => {
    window.location.href = 'mailto:hello@shopey.tech?subject=Shopey%20Custom%20Plan%20Enquiry';
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Simple, one-time pricing
          </h2>
          <p className="mt-3 text-neutral-500 max-w-xl">
            Pay once, own your store. No recurring platform fee — ever.
          </p>
        </div>

        {/* Plans */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mb-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 flex flex-col ${
                plan.highlight
                  ? 'border-neutral-900 bg-neutral-900 text-white'
                  : 'border-neutral-200 bg-white'
              }`}
            >
              <p className={`text-xs font-semibold tracking-wide uppercase mb-4 ${plan.highlight ? 'text-neutral-400' : 'text-neutral-400'}`}>
                {plan.name}
              </p>
              <div className="mb-1">
                <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-neutral-900'}`}>
                  {plan.price}
                </span>
                <span className={`ml-2 text-sm ${plan.highlight ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  {plan.priceNote}
                </span>
              </div>
              <p className={`text-sm mb-6 ${plan.highlight ? 'text-neutral-400' : 'text-neutral-500'}`}>
                {plan.desc}
              </p>
              <ul className="space-y-2.5 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      size={14}
                      className={`shrink-0 mt-0.5 ${plan.highlight ? 'text-green-400' : 'text-green-600'}`}
                    />
                    <span className={`text-xs leading-relaxed ${plan.highlight ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              {plan.highlight ? (
                <button
                  onClick={handleContact}
                  className="w-full flex items-center justify-center gap-2 bg-white text-neutral-900 font-medium text-sm px-4 py-2.5 rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  {plan.cta}
                  <ArrowRight size={14} />
                </button>
              ) : (
                <a
                  href="mailto:hello@shopey.tech?subject=Shopey%20Starter%20Plan%20Enquiry"
                  className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-white font-medium text-sm px-4 py-2.5 rounded-lg hover:bg-neutral-700 transition-colors"
                >
                  {plan.cta}
                  <ArrowRight size={14} />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Included note */}
        <div className="border border-neutral-200 bg-white rounded-xl p-5 max-w-3xl">
          <p className="text-xs font-semibold text-neutral-700 mb-3">Included with every plan</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <Check size={12} className="text-green-600 shrink-0" />
                <span className="text-xs text-neutral-500">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
