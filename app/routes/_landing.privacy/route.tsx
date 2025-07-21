import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function meta() {
  return [
    { title: "Privacy Policy - React Router Boilerplate" },
    { name: "description", content: "Privacy policy for React Router Boilerplate application." },
  ];
}

const PrivacyPage = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                When you use our application, we may collect the following information:
              </p>
              <ul>
                <li><strong>Account Information:</strong> When you sign in with Google OAuth, we collect your name, email address, and profile picture.</li>
                <li><strong>Usage Data:</strong> We may collect information about how you use our application, including pages visited and features used.</li>
                <li><strong>Technical Data:</strong> We automatically collect certain technical information, including your IP address, browser type, and device information.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>We use the collected information for the following purposes:</p>
              <ul>
                <li>To provide and maintain our service</li>
                <li>To authenticate and authorize your access</li>
                <li>To improve our application and user experience</li>
                <li>To communicate with you about service updates</li>
                <li>To ensure the security and integrity of our service</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Storage and Security</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                Your data is stored securely using Cloudflare's infrastructure:
              </p>
              <ul>
                <li>All data is encrypted in transit and at rest</li>
                <li>We use Cloudflare D1 database with built-in security features</li>
                <li>Access to your data is strictly controlled and monitored</li>
                <li>We implement industry-standard security practices</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>Our application integrates with the following third-party services:</p>
              <ul>
                <li><strong>Google OAuth:</strong> For authentication purposes</li>
                <li><strong>Cloudflare:</strong> For hosting, database, and security services</li>
              </ul>
              <p>
                These services have their own privacy policies, and we encourage you to review them.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>You have the following rights regarding your personal data:</p>
              <ul>
                <li><strong>Access:</strong> You can request access to your personal data</li>
                <li><strong>Correction:</strong> You can request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> You can request deletion of your personal data</li>
                <li><strong>Portability:</strong> You can request a copy of your data in a portable format</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                If you have any questions about this Privacy Policy or our data practices,
                please contact us at: <strong>privacy@yourapp.com</strong>
              </p>
              <p>
                We will respond to your inquiry within 30 days.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;