import { CheckCircle, Code, Database, Globe, Lock, Zap } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { siteConfig } from "~/config/site-config";

export function meta() {
  return [
    { title: `${siteConfig.name} - Modern Full-Stack React Boilerplate` },
    { name: "description", content: siteConfig.description },
    { name: "keywords", content: siteConfig.keywords.join(", ") },
    { name: "author", content: siteConfig.author },

    // Open Graph
    {
      property: "og:title",
      content: `${siteConfig.name} - Modern Full-Stack React Boilerplate`,
    },
    { property: "og:description", content: siteConfig.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: siteConfig.appUrl },
    {
      property: "og:image",
      content: `${siteConfig.appUrl}${siteConfig.ogpImage}`,
    },
    { property: "og:site_name", content: siteConfig.name },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: `${siteConfig.name} - Modern Full-Stack React Boilerplate`,
    },
    { name: "twitter:description", content: siteConfig.description },
    {
      name: "twitter:image",
      content: `${siteConfig.appUrl}${siteConfig.ogpImage}`,
    },

    // Additional SEO
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { httpEquiv: "Content-Type", content: "text/html; charset=utf-8" },
  ];
}

const LandingIndex = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto text-center">
          <Badge className="mb-4" variant="secondary">
            React Router v7 + Cloudflare
          </Badge>
          <h1 className="mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text font-bold text-4xl text-transparent md:text-6xl">
            Modern Full-Stack
            <br />
            React Boilerplate
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600 text-xl dark:text-gray-400">
            Build production-ready React applications with server-side
            rendering, authentication, database integration, and edge deployment
            on Cloudflare.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              size="lg"
            >
              Get Started
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://github.com/your-username/your-repo"
                rel="noopener noreferrer"
                target="_blank"
              >
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 px-4 py-20 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-3xl md:text-4xl">
              Everything You Need
            </h2>
            <p className="text-gray-600 text-xl dark:text-gray-400">
              A complete boilerplate with modern tools and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Zap className="mb-2 h-8 w-8 text-purple-600" />
                <CardTitle>React Router v7</CardTitle>
                <CardDescription>
                  Full-stack React framework with server-side rendering and
                  file-based routing
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="mb-2 h-8 w-8 text-blue-600" />
                <CardTitle>Cloudflare Edge</CardTitle>
                <CardDescription>
                  Deploy to the edge with Cloudflare Workers and Pages for
                  global performance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Database className="mb-2 h-8 w-8 text-green-600" />
                <CardTitle>D1 Database</CardTitle>
                <CardDescription>
                  SQLite database at the edge with Drizzle ORM for type-safe
                  queries
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="mb-2 h-8 w-8 text-red-600" />
                <CardTitle>Authentication</CardTitle>
                <CardDescription>
                  Built-in OAuth authentication with Google using better-auth
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Code className="mb-2 h-8 w-8 text-yellow-600" />
                <CardTitle>Modern Tooling</CardTitle>
                <CardDescription>
                  TypeScript, Tailwind CSS, Biome, and Vitest for the best
                  developer experience
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="mb-2 h-8 w-8 text-indigo-600" />
                <CardTitle>Production Ready</CardTitle>
                <CardDescription>
                  Optimized build, security best practices, and deployment
                  automation
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-3xl md:text-4xl">
              Built With Modern Tech
            </h2>
            <p className="text-gray-600 text-xl dark:text-gray-400">
              Carefully selected tools for performance, developer experience,
              and maintainability
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            {[
              "React Router",
              "Cloudflare",
              "TypeScript",
              "Tailwind CSS",
              "Drizzle ORM",
              "better-auth",
              "Vite",
              "Biome",
              "Vitest",
              "shadcn/ui",
              "D1 Database",
              "Workers",
            ].map((tech) => (
              <div className="text-center" key={tech}>
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {tech}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 font-bold text-3xl text-white md:text-4xl">
            Ready to Build Something Amazing?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-purple-100 text-xl">
            Start with this boilerplate and focus on building your unique
            features instead of setting up infrastructure.
          </p>
          <Button
            className="bg-white text-purple-600 hover:bg-gray-100"
            size="lg"
            variant="secondary"
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingIndex;
