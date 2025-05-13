"use client";

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>

      <div className="prose prose-lg">
        <p className="mb-6">
          At Shashi Piptan {`("we," "our," or "us")`}, we value your privacy and
          are committed to protecting your personal information. This Privacy
          Policy explains how we collect, use, and safeguard the email addresses
          submitted through our website.
        </p>

        <div className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">
            1. Information We Collect
          </h2>
          <p>We only collect the following information:</p>
          <ul className="list-disc pl-6">
            <li>
              Email Address — provided voluntarily through our notification
              form.
            </li>
            <li>
              No payment, address, or sensitive personal information is
              collected on this site.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">
            2. How We Use Your Information
          </h2>
          <p>Your email address will be used solely for:</p>
          <ul className="list-disc pl-6">
            <li>
              Sending notifications about the launch of Dubai&apos;s Urban
              Evolution by Shashi P. Piptan.
            </li>
            <li>Providing occasional updates related to the book release.</li>
            <li>We do not send promotional emails unrelated to this book.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">
            3. How We Protect Your Information
          </h2>
          <p className="mb-4">
            We implement reasonable technical and organizational measures to
            protect your information from unauthorized access, alteration,
            disclosure, or destruction.
          </p>
          <p className="mb-4">
            Your information is stored securely and is accessible only to
            authorized personnel.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">
            4. Sharing of Information
          </h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may use trusted service providers{" "}
            {`(such as email marketing tools)`} solely to assist us in
            delivering notifications to you.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">5. Your Rights</h2>
          <ul className="list-disc pl-6">
            <li>
              Unsubscribe at any time by clicking the unsubscribe link in any
              notification email or by contacting us directly.
            </li>
            <li>Request deletion of your email address from our records.</li>
          </ul>
          <p>
            To exercise these rights, please contact us at{" "}
            <Link
              href="mailto:info@piptan.com"
              className="text-blue-600 hover:underline"
            >
              info@piptan.com
            </Link>
            .
          </p>
        </div>

        <div className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">6. Third-Party Links</h2>
          <p>
            Our website may contain links to external sites (such as Amazon)
            where the book can be purchased. We are not responsible for the
            privacy practices or content of third-party websites.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">
            7. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy occasionally. Changes will be
            posted on this page with a revised effective date. We encourage you
            to review this Privacy Policy periodically.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle
            your information, please contact:
          </p>
          <address className="not-italic">
            Email:{" "}
            <Link
              href="mailto:info@piptan.com"
              className="text-blue-600 hover:underline"
            >
              info@piptan.com
            </Link>
            <br />
            Business Address: Suite 1108, Ocean Centre, Harbour City, Kowloon,
            Hong Kong
          </address>
        </div>
      </div>
    </div>
  );
}
