import { Link } from "react-router";

interface LogoProps {
  to: string;
  className?: string;
}

export function Logo({ to, className = "" }: LogoProps) {
  return (
    <Link to={to} className={`flex items-center gap-2 group ${className}`}>
      <div className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <img
          src="/favicons/favicon-32x32.png"
          alt="Logo"
          className="w-8 h-8"
        />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        YourApp
      </span>
    </Link>
  );
}