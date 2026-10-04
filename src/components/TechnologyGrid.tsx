import {
  DotNetIcon,
  ReactIcon,
  ViteIcon,
  SupabaseIcon,
  CloudinaryIcon,
  GoogleAuthIcon,
  RazorpayIcon,
  BrevoIcon,
  SmsIcon,
} from '../icons/TechIcons';

const technologies = [
  {
    Icon: DotNetIcon,
    name: '.NET',
    desc: 'Robust backend API',
  },
  {
    Icon: ReactIcon,
    name: 'React',
    desc: 'Fast, interactive UI',
  },
  {
    Icon: ViteIcon,
    name: 'Vite',
    desc: 'Lightning-fast builds',
  },
  {
    Icon: SupabaseIcon,
    name: 'Supabase',
    desc: 'Database & storage',
  },
  {
    Icon: CloudinaryIcon,
    name: 'Cloudinary',
    desc: 'Image delivery CDN',
  },
  {
    Icon: GoogleAuthIcon,
    name: 'Google Auth',
    desc: 'Secure sign-in',
  },
  {
    Icon: RazorpayIcon,
    name: 'Razorpay',
    desc: 'Payment processing',
  },
  {
    Icon: BrevoIcon,
    name: 'Brevo',
    desc: 'Email notifications',
  },
  {
    Icon: SmsIcon,
    name: 'SMS',
    desc: 'Order SMS alerts',
  },
];

export default function TechnologyGrid() {
  return (
    <section id="technology" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2">Built on</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Modern, proven technology
          </h2>
          <p className="mt-3 text-neutral-500 max-w-xl">
            Shopey is built on the same stack trusted by high-growth startups — fast, secure and scalable.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
          {technologies.map(({ Icon, name, desc }) => (
            <div
              key={name}
              className="group border border-neutral-200 rounded-xl p-4 flex flex-col items-center text-center gap-2.5 hover:border-neutral-300 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral-900">{name}</p>
                <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
