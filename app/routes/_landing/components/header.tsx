import { useNavigate, useRouteLoaderData } from "react-router";
import { Button } from "~/components/ui/button";
import { ThemeToggle } from "~/components/theme-toggle";
import { Logo } from "~/components/logo";
import { UserAvatar } from "~/components/user-avatar";
import { getAuthClient } from "~/lib/auth/auth-client";

export function LandingHeader() {
  const navigate = useNavigate();
  // Attempt to get user data from the root loader, if available.
  // This is a fallback and might not always be present on the landing route.
  const rootData = useRouteLoaderData("root") as {
    user: { name: string; image?: string | null; };
    baseURL: string;
  } | undefined;

  const { signIn: signInAuth, signOut: signOutAuth } = getAuthClient({ baseURL: rootData?.baseURL || "" });

  const signInGoogle = async () => {
    await signInAuth.social({
      provider: "google",
      callbackURL: '/home'
    });
  };

  const signOut = async () => {
    await signOutAuth();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-1">
            <Logo to="/" className="w-fit" />
          </div>



          {/* Right: Theme Toggle + Auth */}
          <div className="flex items-center gap-3 flex-1 justify-end">
            <ThemeToggle />
            {rootData?.user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <UserAvatar user={rootData.user} size="sm" />
                  <span className="text-gray-700 dark:text-gray-300 hidden sm:block text-sm font-medium">{rootData.user.name}</span>
                </div>
                <Button
                  onClick={() => signOut()}
                  variant="outline"
                  size="sm"
                  className="border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                onClick={signInGoogle}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Login with Google
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}