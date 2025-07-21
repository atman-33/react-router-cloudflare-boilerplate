import type { Route } from './+types/route';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'Terms of Service - MangaLog' },
    { name: 'description', content: 'Terms of service for MangaLog manga tracking application' },
  ];
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Last updated: January 19, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Acceptance of Terms</h2>
          <p className="text-gray-600 dark:text-gray-400">
            By accessing and using MangaLog, you accept and agree to be bound by the terms and
            provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Description of Service</h2>
          <p className="text-gray-600 dark:text-gray-400">
            MangaLog is a personal manga tracking application that allows users to log and track
            their manga reading progress. The service is provided free of charge for personal, non-commercial use.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">User Accounts</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            To use MangaLog, you must:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Have a valid Google account for authentication</li>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account</li>
            <li>Be responsible for all activities under your account</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Acceptable Use</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            You agree to use MangaLog only for lawful purposes and in accordance with these terms. You agree not to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Use the service for any illegal or unauthorized purpose</li>
            <li>Attempt to gain unauthorized access to the service or other users' accounts</li>
            <li>Upload or transmit malicious code or harmful content</li>
            <li>Interfere with or disrupt the service or servers</li>
            <li>Use automated tools to access the service without permission</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">User Content</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            You retain ownership of the content you create on MangaLog (manga logs, notes, etc.). By using the service, you grant us:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
            <li>The right to store and display your content as part of the service</li>
            <li>The right to backup and restore your data</li>
            <li>The right to process your data as described in our Privacy Policy</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Service Availability</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We strive to maintain high availability of MangaLog, but we do not guarantee uninterrupted access.
            The service may be temporarily unavailable due to maintenance, updates, or technical issues.
            We are not liable for any inconvenience or loss resulting from service interruptions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Intellectual Property</h2>
          <p className="text-gray-600 dark:text-gray-400">
            The MangaLog application, including its design, code, and features, is owned by us and protected
            by intellectual property laws. You may not copy, modify, distribute, or create derivative works
            based on our service without explicit permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Disclaimer of Warranties</h2>
          <p className="text-gray-600 dark:text-gray-400">
            MangaLog is provided "as is" without any warranties, express or implied. We do not warrant that
            the service will be error-free, secure, or continuously available. Use of the service is at your own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We shall not be liable for any indirect, incidental, special, or consequential damages arising
            from your use of MangaLog, including but not limited to loss of data, profits, or business interruption.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Account Termination</h2>
          <p className="text-gray-600 dark:text-gray-400">
            You may delete your account at any time. We reserve the right to suspend or terminate accounts
            that violate these terms or engage in harmful activities. Upon termination, your data will be
            deleted in accordance with our Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Changes to Terms</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We may update these terms from time to time. We will notify users of significant changes by
            posting the updated terms on this page and updating the "Last updated" date. Continued use
            of the service after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
          <p className="text-gray-600 dark:text-gray-400">
            If you have questions about these terms, please contact us through our GitHub repository
            or the contact information provided on our website.
          </p>
        </section>
      </div>
    </div>
  );
}