import { useNavigate, useRouteLoaderData } from "react-router";
import { Logo } from "~/components/logo";
import { ThemeToggle } from "~/components/theme-toggle";
import { Button } from "~/components/ui/button";
import { UserAvatar } from "~/components/user-avatar";
import { getAuthClient } from "~/lib/auth/auth-client";

export function LandingHeader() {
  const navigate = useNavigate();
  // Attempt to get user data from the root loader, if available.
  // This is a fallback and might not always be present on the landing route.
  const rootData = useRouteLoaderData("root") as
    | {
        user: { name: string; image?: string | null };
        baseURL: string;
      }
    | undefined;

  const { signIn: signInAuth, signOut: signOutAuth } = getAuthClient({
    baseURL: rootData?.baseURL || "",
  });

  const signInGoogle = async () => {
    await signInAuth.social({
      provider: "google",
      callbackURL: "/home",
    });
  };

  const signOut = async () => {
    await signOutAuth();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 border-gray-200/50 border-b bg-white/80 backdrop-blur-md dark:border-gray-700/50 dark:bg-gray-900/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-1">
            <Logo className="w-fit" to="/" />
          </div>

          {/* Right: Theme Toggle + Auth */}
          <div className="flex flex-1 items-center justify-end gap-3">
            <ThemeToggle />
            {rootData?.user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <UserAvatar size="sm" user={rootData.user} />
                  <span className="hidden font-medium text-gray-700 text-sm sm:block dark:text-gray-300">
                    {rootData.user.name}
                  </span>
                </div>
                <Button
                  className="border-purple-200 hover:bg-purple-50 dark:border-purple-700 dark:hover:bg-purple-900/20"
                  onClick={() => signOut()}
                  size="sm"
                  variant="outline"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:shadow-xl"
                onClick={signInGoogle}
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
