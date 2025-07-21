import type { Route } from './+types/route';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import {
  BookOpen,
  Database,
  Globe,
  Lock,
  Zap,
  Code,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from "lucide-react";

export async function loader({ context }: Route.LoaderArgs) {
  // You can add any data loading logic here
  return {
    stats: {
      features: 6,
      techStack: 12,
      readyToUse: true
    }
  };
}

const HomeIndex = ({ loaderData }: Route.ComponentProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Welcome to your dashboard
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            You're All Set!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your React Router + Cloudflare boilerplate is ready. Start building your amazing application with all the modern tools already configured.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-2xl">{loaderData.stats.features}</CardTitle>
              <CardDescription>Core Features Ready</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-2xl">{loaderData.stats.techStack}</CardTitle>
              <CardDescription>Modern Technologies</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <CardTitle className="text-2xl">100%</CardTitle>
              <CardDescription>Production Ready</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* What's Included */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">What's Already Configured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lock className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Authentication</CardTitle>
                <CardDescription>
                  Google OAuth is working! You're logged in right now using better-auth.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Database Ready</CardTitle>
                <CardDescription>
                  Cloudflare D1 with Drizzle ORM is configured and ready for your data models.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Edge Deployment</CardTitle>
                <CardDescription>
                  Deploy globally with Cloudflare Workers and Pages for lightning-fast performance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle>React Router v7</CardTitle>
                <CardDescription>
                  File-based routing with SSR, data loading, and modern React patterns.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="w-8 h-8 text-yellow-600 mb-2" />
                <CardTitle>Developer Tools</CardTitle>
                <CardDescription>
                  TypeScript, Tailwind CSS, Biome, and Vitest are all configured and ready.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-indigo-600 mb-2" />
                <CardTitle>UI Components</CardTitle>
                <CardDescription>
                  shadcn/ui components with Tailwind CSS for beautiful, accessible interfaces.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Next Steps */}
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Start Building?</CardTitle>
            <CardDescription className="text-purple-100">
              Here are some next steps to customize this boilerplate for your needs:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Customize Your App</h3>
                <ul className="space-y-2 text-purple-100">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Update site config in <code className="bg-purple-700 px-2 py-1 rounded">app/config/site-config.ts</code>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Add your database schema in <code className="bg-purple-700 px-2 py-1 rounded">database/schema.ts</code>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Create your app routes in <code className="bg-purple-700 px-2 py-1 rounded">app/routes/</code>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Deploy & Configure</h3>
                <ul className="space-y-2 text-purple-100">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Set up Cloudflare environment variables
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Configure your OAuth providers
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Run <code className="bg-purple-700 px-2 py-1 rounded">npm run deploy</code>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
                <a href="https://github.com/your-username/your-repo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  View Documentation
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Start Building
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomeIndex;