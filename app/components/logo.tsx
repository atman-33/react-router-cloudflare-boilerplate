import { Link } from "react-router";

type LogoProps = {
  to: string;
  className?: string;
};

export function Logo({ to, className = "" }: LogoProps) {
  return (
    <Link className={`group flex items-center gap-2 ${className}`} to={to}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110">
        {/** biome-ignore lint/nursery/useImageSize: ignore */}
        {/** biome-ignore lint/performance/noImgElement: ignore */}
        <img alt="Logo" className="h-8 w-8" src="/favicons/favicon-32x32.png" />
      </div>
      <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text font-bold text-2xl text-transparent">
        YourApp
      </span>
    </Link>
  );
}
