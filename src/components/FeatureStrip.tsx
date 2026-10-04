import { ShoppingCart, CreditCard, BarChart2, Headphones } from 'lucide-react';

const items = [
  {
    icon: ShoppingCart,
    title: 'Full Storefront',
    desc: 'Products, categories, cart and checkout — all ready.',
  },
  {
    icon: CreditCard,
    title: 'Payments Built-in',
    desc: 'Razorpay integrated out of the box.',
  },
  {
    icon: BarChart2,
    title: 'Admin Dashboard',
    desc: 'Manage orders, inventory and customers easily.',
  },
  {
    icon: Headphones,
    title: 'Lifetime Support',
    desc: 'We support you after delivery, always.',
  },
];

export default function FeatureStrip() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-neutral-200">
                <Icon size={16} className="text-neutral-700" />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">{title}</p>
                <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
