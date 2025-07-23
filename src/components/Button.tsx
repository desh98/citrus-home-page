import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  label: string;
  href?: string;
}

export default function Button({ label, href = "#" }: ButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-semibold text-sm transition"
    >
      {label}
      <ArrowRight size={16} />
    </a>
  );
}
