import { getAuth } from "~/lib/auth/auth.server";
import { getAuthClient } from "~/lib/auth/auth-client";
import type { Route } from "./+types/route";

export function meta() {
  return [
    { title: "Better Auth / React Router App + Cloudflare Workers" },
    {
      name: "description",
      content: "Welcome to React Router hosted on Cloudflare Workers!",
    },
  ];
}

export async function loader({ context, request }: Route.LoaderArgs) {
  const auth = getAuth(context);
  const session = await auth.api.getSession({ headers: request.headers });

  return {
    // biome-ignore lint/style/useNamingConvention: ignore
    baseURL: context.cloudflare.env.BETTER_AUTH_URL,
    user: session?.user,
  };
}

export default function DemoAuth({ loaderData }: Route.ComponentProps) {
  // biome-ignore lint/style/useNamingConvention: ignore
  const { signIn } = getAuthClient({ baseURL: loaderData.baseURL });

  const signInGitHub = async () => {
    await signIn.social({
      provider: "github",
    });
  };

  const signInGoogle = async () => {
    await signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="mx-auto max-w-sm p-4">
      <h1 className="text-xl">
        Better Auth example (hosted on Cloudflare Workers)
      </h1>
      {loaderData.user ? (
        <div className="whitespace-pre-wrap">
          {JSON.stringify(loaderData.user)}
        </div>
      ) : (
        <div className="flex gap-4">
          <button
            className="dark:highlight-white/20 flex h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-6 font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-auto dark:bg-sky-500 dark:hover:bg-sky-400"
            onClick={() => signInGitHub()}
            type="button"
          >
            Login with GitHub
          </button>
          <button
            className="dark:highlight-white/20 flex h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-6 font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-auto dark:bg-sky-500 dark:hover:bg-sky-400"
            onClick={() => signInGoogle()}
            type="button"
          >
            Login with Google
          </button>
        </div>
      )}
    </div>
  );
}
