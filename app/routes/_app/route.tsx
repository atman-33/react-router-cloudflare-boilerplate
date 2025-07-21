import { Outlet, redirect } from 'react-router';
import type { Route } from './+types/route';
import { Header } from '~/routes/_app/components/header';
import { Footer } from '~/components/layout/footer';
import { getAuth } from '~/lib/auth/auth.server';

export const loader = async ({ request, context }: Route.LoaderArgs) => {
  // Check authentication
  const auth = getAuth(context);
  const session = await auth.api.getSession({ headers: request.headers });

  if (!session || !session.user) {
    // Redirect unauthenticated users to the top page
    throw redirect('/');
  }

  const contactEmail = context.cloudflare.env.CONTACT_EMAIL;
  return {
    contactEmail,
    user: session.user
  };
};

const AppLayout = ({ loaderData }: Route.ComponentProps) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer contactEmail={loaderData.contactEmail} />
    </>
  );
};

export default AppLayout;