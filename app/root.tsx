import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { ReactCallRoots } from './components/react-call';
import { AdScripts } from './components/ad-scripts';
import { CustomToaster } from './components/custom-sonner';
import { ThemeProvider } from './components/theme-provider';
import { getAuth } from '~/lib/auth/auth.server';

export const loader = async ({ request, context }: Route.LoaderArgs) => {
	// Get base URL for auth client
	const url = new URL(request.url);
	const baseURL = `${url.protocol}//${url.host}`;

	// Check if user is authenticated (optional, doesn't redirect)
	const auth = getAuth(context);
	let user = null;

	try {
		const session = await auth.api.getSession({ headers: request.headers });
		user = session?.user || null;
	} catch (error) {
		// Ignore auth errors on root loader
		console.log('Auth check failed in root loader:', error);
	}

	return {
		baseURL,
		user
	};
};

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
	{
		rel: 'apple-touch-icon',
		sizes: '180x180',
		href: '/favicons/apple-touch-icon.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '32x32',
		href: '/favicons/favicon-32x32.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '16x16',
		href: '/favicons/favicon-16x16.png',
	},
	{ rel: 'manifest', href: '/site.webmanifest' },
	{ rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
];

export function Layout({ children }: { children: React.ReactNode; }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<AdScripts />
				<Meta />
				<Links />
			</head>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
					storageKey="acme-theme"
				>
					{children}
				</ThemeProvider>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<>
			<Outlet />
			<ReactCallRoots />
			<CustomToaster />
		</>
	);
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
