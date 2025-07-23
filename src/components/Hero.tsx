import Image from 'next/image';
import Button from './Button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white px-8 py-20 pt-40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center z-10 relative">
        <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-4">
          Cloud Based, All-in-One<br />Hotel Management System
        </h1>
        <p className="text-lg text-white/80 mb-8">
          Meeting all of your Hotel business needs.
        </p>
        <Button label="REQUEST A DEMO" />
      </div>

      {/* Hero UI image */}
      <div className="mt-20 relative z-10 flex justify-center">
        <Image
          src="/images/hero-ui.png"
          alt="Hotel dashboard UI"
          width={900}
          height={500}
          className="rounded-xl shadow-xl"
        />
      </div>

      {/* Abstract shapes (optional, decorative) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-yellow-400 rounded-full opacity-30 blur-2xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
}
