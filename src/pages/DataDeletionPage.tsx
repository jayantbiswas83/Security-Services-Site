import React from 'react';

export function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-[#0c1322] px-6 py-16 text-[#dce2f8]">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-cyan-400 hover:text-cyan-300">
          ← CyberJoy AI
        </a>

        <h1 className="mt-8 text-4xl font-bold text-white">
          User Data Deletion Instructions
        </h1>
        <p className="mt-3 text-sm text-slate-400">
          Effective date: November 2, 2026
        </p>

        <div className="mt-10 space-y-8 leading-7 text-slate-300">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              1. Your Right to Request Data Deletion
            </h2>
            <p>
              CyberJoy AI respects your right to request deletion of
              personal information collected through our website and
              LeadJayAI WhatsApp automation services, subject to
              applicable legal requirements.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              2. What Information May Be Deleted
            </h2>
            <p>
              Depending on the information we hold, a deletion request
              may cover:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Your name and WhatsApp phone number.</li>
              <li>Your WhatsApp messages and conversation records.</li>
              <li>Lead and enquiry details associated with you.</li>
              <li>Other personal information linked to your enquiry.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              3. How to Submit a Deletion Request
            </h2>
            <ol className="list-decimal space-y-3 pl-6">
              <li>
                Visit the Contact section of our website using the link
                below.
              </li>
              <li>
                State clearly that you are requesting deletion of your
                personal data held by CyberJoy AI / LeadJayAI.
              </li>
              <li>
                Provide the WhatsApp phone number associated with your
                interaction, including the country code, so we can
                identify the relevant records.
              </li>
              <li>
                We may request reasonable additional information to
                verify your request and protect your privacy.
              </li>
            </ol>

            <a
              href="/#contact"
              className="mt-5 inline-block rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-[#0c1322] hover:bg-cyan-400"
            >
              Submit a Data Deletion Request
            </a>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              4. What Happens Next
            </h2>
            <p>
              After receiving your request, we will review it, verify
              your identity where reasonably necessary, and take
              appropriate steps to delete the personal information
              covered by the request from systems under our control,
              subject to applicable legal obligations.
            </p>
            <p className="mt-3">
              Some information may remain temporarily in backups,
              security records, or third-party systems according to
              their retention practices and applicable legal
              requirements.
            </p>
            <p className="mt-3">
              We will communicate with you if additional information
              is needed or if any part of the request cannot be
              fulfilled.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              5. Third-Party Services
            </h2>
            <p>
              WhatsApp message delivery and processing may involve
              Meta and other service providers used by CyberJoy AI.
              Deletion from our systems does not automatically delete
              information independently retained by those providers.
              You may also need to contact the relevant provider
              directly for information held by it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              6. Contact
            </h2>
            <p>
              For assistance with a data deletion request, use our
              website's Contact section and identify your request
              as a privacy or data deletion request.
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
