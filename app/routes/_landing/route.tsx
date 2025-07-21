import { Outlet } from "react-router";
import type { Route } from './+types/route';
import { LandingFooter } from "./components/footer";
import { LandingHeader } from "./components/header";

export const loader = async ({ context }: Route.LoaderArgs) => {
  const contactEmail = context.cloudflare.env.CONTACT_EMAIL;
  return { contactEmail };
};

export default function LandingLayout({ loaderData }: Route.ComponentProps) {
  return (
    <div className="min-h-screen">
      <LandingHeader />
      <main>
        <Outlet />
      </main>
      <LandingFooter contactEmail={loaderData.contactEmail} />
    </div>
  );
}
