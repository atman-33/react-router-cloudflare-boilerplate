import { Link } from "react-router";

interface LogoProps {
  to: string;
  className?: string;
}

export function Logo({ to, className = "" }: LogoProps) {
  return (
    <Link className={`group flex items-center gap-2 ${className}`} to={to}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110">
        <img alt="Logo" className="h-8 w-8" src="/favicons/favicon-32x32.png" />
      </div>
      <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text font-bold text-2xl text-transparent">
        YourApp
      </span>
    </Link>
  );
}
