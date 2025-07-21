import { Footer } from "~/components/layout/footer";

interface LandingFooterProps {
  contactEmail?: string;
}

export function LandingFooter({ contactEmail }: LandingFooterProps) {
  return <Footer contactEmail={contactEmail} />;
}