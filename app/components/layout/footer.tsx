import { Mail } from "lucide-react";
import { Link } from "react-router";
import { Logo } from "~/components/logo";
import { siteConfig } from "~/config/site-config";
import { GitHubIcon } from "../icons/github-icon";
import { XIcon } from "../icons/x-icon";

type FooterProps = {
  contactEmail?: string;
};

export function Footer({ contactEmail }: FooterProps) {
  return (
    <footer className="border-gray-200/50 border-t bg-gray-50 dark:border-gray-700/50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-4" to="/" />
            <p className="mb-6 max-w-md text-gray-600 dark:text-gray-400">
              A modern React Router + Cloudflare boilerplate with
              authentication, database, and server-side rendering. Perfect for
              building full-stack React applications.
            </p>
            <div className="flex items-center gap-4">
              <a
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white transition-colors hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-purple-900/20"
                href={siteConfig.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <GitHubIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </a>
              <a
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white transition-colors hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-purple-900/20"
                href={siteConfig.xUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <XIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </a>
              {contactEmail && (
                <a
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white transition-colors hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-purple-900/20"
                  href={`mailto:${contactEmail}`}
                >
                  <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </a>
              )}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  to="/privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  to="/terms"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Empty column for spacing */}
          <div />
        </div>

        {/* Copyright */}
        <div className="mt-12 border-gray-200 border-t pt-8 dark:border-gray-700">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-gray-600 text-sm dark:text-gray-400">
              © 2025 React Router Boilerplate. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm dark:text-gray-400">
              Built with React Router + Cloudflare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
