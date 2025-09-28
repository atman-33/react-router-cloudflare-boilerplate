import { Footer } from "~/components/layout/footer";

type LandingFooterProps = {
  contactEmail?: string;
};

export function LandingFooter({ contactEmail }: LandingFooterProps) {
  return <Footer contactEmail={contactEmail} />;
}
