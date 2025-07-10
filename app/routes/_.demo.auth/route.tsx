import { getAuthClient } from "~/lib/auth/auth-client";
import { getAuth } from "~/lib/auth/auth.server";
import type { Route } from './+types/route';

export function meta({}: Route.MetaArgs) {
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
    baseURL: context.cloudflare.env.BETTER_AUTH_URL,
    user: session?.user,
  };
}

export default function DemoAuth({ loaderData }: Route.ComponentProps) {
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
            onClick={() => signInGitHub()}
            className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
          >
            Login with GitHub
          </button>
          <button
            onClick={() => signInGoogle()}
            className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
          >
            Login with Google
          </button>
        </div>
      )}
    </div>
  );
}
