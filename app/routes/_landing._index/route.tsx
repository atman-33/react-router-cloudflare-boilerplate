import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { CheckCircle, Database, Globe, Lock, Zap, Code } from "lucide-react";
import { siteConfig } from "~/config/site-config";

export function meta() {
  return [
    { title: `${siteConfig.name} - Modern Full-Stack React Boilerplate` },
    { name: "description", content: siteConfig.description },
    { name: "keywords", content: siteConfig.keywords.join(", ") },
    { name: "author", content: siteConfig.author },

    // Open Graph
    { property: "og:title", content: `${siteConfig.name} - Modern Full-Stack React Boilerplate` },
    { property: "og:description", content: siteConfig.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: siteConfig.appUrl },
    { property: "og:image", content: `${siteConfig.appUrl}${siteConfig.ogpImage}` },
    { property: "og:site_name", content: siteConfig.name },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: `${siteConfig.name} - Modern Full-Stack React Boilerplate` },
    { name: "twitter:description", content: siteConfig.description },
    { name: "twitter:image", content: `${siteConfig.appUrl}${siteConfig.ogpImage}` },

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
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            React Router v7 + Cloudflare
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Modern Full-Stack
            <br />
            React Boilerplate
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Build production-ready React applications with server-side rendering, authentication,
            database integration, and edge deployment on Cloudflare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Get Started
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/your-username/your-repo" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A complete boilerplate with modern tools and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle>React Router v7</CardTitle>
                <CardDescription>
                  Full-stack React framework with server-side rendering and file-based routing
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Cloudflare Edge</CardTitle>
                <CardDescription>
                  Deploy to the edge with Cloudflare Workers and Pages for global performance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Database className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>D1 Database</CardTitle>
                <CardDescription>
                  SQLite database at the edge with Drizzle ORM for type-safe queries
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Authentication</CardTitle>
                <CardDescription>
                  Built-in OAuth authentication with Google using better-auth
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Code className="w-8 h-8 text-yellow-600 mb-2" />
                <CardTitle>Modern Tooling</CardTitle>
                <CardDescription>
                  TypeScript, Tailwind CSS, Biome, and Vitest for the best developer experience
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="w-8 h-8 text-indigo-600 mb-2" />
                <CardTitle>Production Ready</CardTitle>
                <CardDescription>
                  Optimized build, security best practices, and deployment automation
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built With Modern Tech</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Carefully selected tools for performance, developer experience, and maintainability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
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
              "Workers"
            ].map((tech) => (
              <div key={tech} className="text-center">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                  <p className="font-medium text-gray-900 dark:text-white">{tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Start with this boilerplate and focus on building your unique features instead of setting up infrastructure.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingIndex;