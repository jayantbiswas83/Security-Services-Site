import React from 'react';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0c1322] px-6 py-16 text-[#dce2f8]">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-cyan-400 hover:text-cyan-300">
          ← CyberJoy AI
        </a>

        <h1 className="mt-8 text-4xl font-bold text-white">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate-400">
          Effective date: November 2, 2026
        </p>

        <div className="mt-10 space-y-8 leading-7 text-slate-300">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              1. Introduction
            </h2>
            <p>
              CyberJoy AI ("we", "our", or "us") respects your privacy.
              This Privacy Policy explains how we collect, use, process,
              and protect information when you interact with our website
              and our LeadJayAI WhatsApp-based lead management and
              automation services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              2. Information We May Collect
            </h2>
            <p>Depending on how you interact with our services, we may process:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Your name or WhatsApp profile name.</li>
              <li>Your WhatsApp phone number.</li>
              <li>Messages and enquiries you send to our WhatsApp service.</li>
              <li>Message identifiers and related conversation information.</li>
              <li>
                Business enquiry details you voluntarily provide, such as
                company name, email address, and requested services.
              </li>
              <li>
                Technical information necessary to operate, troubleshoot,
                and secure the service.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              3. How We Use Information
            </h2>
            <p>We may use the information to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Respond to enquiries and customer messages.</li>
              <li>Qualify and manage potential business leads.</li>
              <li>Route enquiries to the relevant business service.</li>
              <li>Maintain conversation context where required.</li>
              <li>Improve service functionality and reliability.</li>
              <li>Prevent misuse, spam, and unauthorized activity.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              4. WhatsApp and Third-Party Service Providers
            </h2>
            <p>
              Our WhatsApp automation may use the Meta WhatsApp Business
              Platform to receive and send messages. Information may be
              processed by service providers that support our operations,
              including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-white">Meta / WhatsApp:</strong>{' '}
                WhatsApp messaging and delivery.
              </li>
              <li>
                <strong className="text-white">n8n:</strong>{' '}
                workflow automation and message processing.
              </li>
              <li>
                <strong className="text-white">Supabase:</strong>{' '}
                storage of lead and conversation information where configured.
              </li>
              <li>
                <strong className="text-white">Google Gemini:</strong>{' '}
                AI-assisted processing of enquiry information where enabled
                in the workflow.
              </li>
            </ul>
            <p className="mt-3">
              These providers process information according to their own
              terms and privacy policies. Information may be processed on
              infrastructure located outside your country, subject to
              applicable law and provider arrangements.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              5. Data Sharing
            </h2>
            <p>
              We do not sell personal information. Information may be
              shared with the service providers described above when
              necessary to operate the service, or where disclosure is
              required by law or necessary to address security and abuse
              concerns.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              6. Data Retention
            </h2>
            <p>
              We retain information only for as long as reasonably
              necessary for the purposes described in this policy,
              including providing the service, maintaining relevant
              business records, resolving disputes, and meeting legal
              obligations. Retention may also depend on the settings
              and policies of the service providers we use.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              7. Data Security
            </h2>
            <p>
              We take reasonable measures intended to protect information
              against unauthorized access, alteration, disclosure, or
              destruction. However, no online service or electronic
              storage method can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              8. Your Choices and Data Rights
            </h2>
            <p>
              Subject to applicable law, you may request access to,
              correction of, or deletion of personal information processed
              through our services. You may also stop interacting with
              our WhatsApp service at any time.
            </p>
            <p className="mt-3">
              To request deletion, please follow the instructions on our{' '}
              <a
                href="/data-deletion"
                className="text-cyan-400 underline hover:text-cyan-300"
              >
                Data Deletion page
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              9. Children's Privacy
            </h2>
            <p>
              Our business enquiry and lead management services are not
              intended to knowingly collect personal information from
              children. If you believe a child has provided personal
              information through our service, please contact us to
              request its review and deletion.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy when our services or
              practices change. The latest effective date will be
              displayed at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              11. Contact Us
            </h2>
            <p>
              For privacy questions or requests relating to your personal
              information, please contact us through the Contact section
              of our website.
            </p>
            <a
              href="/#contact"
              className="mt-3 inline-block text-cyan-400 underline hover:text-cyan-300"
            >
              Contact CyberJoy AI
            </a>
          </section>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} CyberJoy AI. All rights reserved.
        </div>
      </div>
    </div>
  );
}
