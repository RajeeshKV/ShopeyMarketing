import {
  Store,
  Smartphone,
  Settings,
  Shield,
  Zap,
  Users,
  Package,
  Bell,
} from 'lucide-react';

const features = [
  {
    icon: Store,
    title: 'Complete Storefront',
    desc: 'A polished, fast online store with product pages, category browsing, search and a smooth checkout flow.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: 'Every page is fully responsive and optimised for mobile shoppers — your store looks great on any device.',
  },
  {
    icon: Settings,
    title: 'Powerful Admin Panel',
    desc: 'Manage products, categories, orders, customers and store settings from a clean, intuitive dashboard.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    desc: 'Google Authentication, secure sessions, and Razorpay-backed payments keep your store and customers safe.',
  },
  {
    icon: Zap,
    title: 'Fast & Reliable',
    desc: 'Built on .NET and React with Vite. Served via Cloudinary CDN for fast image delivery globally.',
  },
  {
    icon: Users,
    title: 'Customer Accounts',
    desc: 'Customers can sign in, track orders, view purchase history and manage their profiles.',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    desc: 'Track stock levels, get low-stock alerts and manage variants directly from your admin.',
  },
  {
    icon: Bell,
    title: 'Order Notifications',
    desc: 'Automated email and SMS notifications keep you and your customers updated at every step.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2">What's included</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Everything your store needs
          </h2>
          <p className="mt-3 text-neutral-500 max-w-xl">
            No plugins, no piecing things together. Shopey ships as a complete, working ecommerce solution.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="border border-neutral-200 rounded-xl p-5 hover:border-neutral-300 hover:shadow-sm transition-all"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-100 mb-4">
                <Icon size={16} className="text-neutral-700" />
              </div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-1.5">{title}</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
