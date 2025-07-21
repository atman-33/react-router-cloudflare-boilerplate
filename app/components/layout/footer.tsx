import { Mail } from "lucide-react";
import { Link } from "react-router";
import { GitHubIcon, XIcon } from "~/components/icons";
import { Logo } from "~/components/logo";
import { siteConfig } from "~/config/site-config";

interface FooterProps {
  contactEmail?: string;
}

export function Footer({ contactEmail }: FooterProps) {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200/50 dark:border-gray-700/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Logo to="/" className="mb-4" />
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              A modern React Router + Cloudflare boilerplate with authentication, database, and server-side rendering. Perfect for building full-stack React applications.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.githubUrl}
                className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors border border-gray-200 dark:border-gray-700"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
              <a
                href={siteConfig.xUrl}
                className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors border border-gray-200 dark:border-gray-700"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
              {contactEmail && (
                <a
                  href={`mailto:${contactEmail}`}
                  className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors border border-gray-200 dark:border-gray-700"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </a>
              )}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Empty column for spacing */}
          <div></div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 React Router Boilerplate. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built with React Router + Cloudflare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}