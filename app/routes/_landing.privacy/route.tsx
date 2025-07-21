import type { Route } from './+types/route';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'Privacy Policy - MangaLog' },
    { name: 'description', content: 'Privacy policy for MangaLog manga tracking application' },
  ];
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Last updated: January 19, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            When you use MangaLog, we collect the following information:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
            <li><strong>Google Account Information:</strong> When you sign in with Google, we collect your name, email address, and profile picture from your Google account.</li>
            <li><strong>Manga Data:</strong> Information about the manga you track, including titles, scores, reading progress, completion status, and personal notes.</li>
            <li><strong>Usage Data:</strong> Basic information about how you use the service, such as when you create or update manga entries.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Provide and maintain your personal manga tracking service</li>
            <li>Authenticate your account and ensure data security</li>
            <li>Display your manga collection and reading progress</li>
            <li>Improve our service and user experience</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Storage and Security</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Your data is stored securely using Cloudflare's infrastructure:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
            <li>All data is stored in Cloudflare D1 databases with encryption at rest</li>
            <li>Data transmission is protected using HTTPS encryption</li>
            <li>Access to your data is restricted to your authenticated account only</li>
            <li>We implement industry-standard security measures to protect your information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Sharing</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We do not sell, trade, or share your personal information with third parties, except:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Google OAuth for authentication purposes</li>
            <li>When required by law or to protect our rights</li>
            <li>With your explicit consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Your Rights</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Access and download your data</li>
            <li>Update or correct your information</li>
            <li>Delete your account and associated data</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Retention</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We retain your data as long as your account is active. If you delete your account,
            we will remove your personal data within 30 days, except where required by law to retain it longer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Changes to This Policy</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We may update this privacy policy from time to time. We will notify you of any changes
            by posting the new policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400">
            If you have any questions about this privacy policy, please contact us through our
            GitHub repository or the contact information provided on our website.
          </p>
        </section>
      </div>
    </div>
  );
}