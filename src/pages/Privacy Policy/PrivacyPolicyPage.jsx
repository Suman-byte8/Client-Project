import React from "react";
import FullLogo from "../../components/FullLogo";

const PrivacyPolicyPage = () => {
  return (
    <main className="flex-1 px-4 py-12 md:px-6 lg:px-8">
      <FullLogo />
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#ea2a33]">
            Last Updated: August 22, 2025
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Privacy Policy
          </h2>
        </div>

        <div className="space-y-8 text-gray-600 font-light mt-8">
          {/* Information We Collect */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Information We Collect
            </h2>
            <p>
              At Silver Arcade Premiere, we collect personal information you
              provide during bookings, check-ins, dining reservations, or while
              using our facilities. This may include your name, email, phone
              number, address, identification documents, and payment details.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              How We Use Your Information
            </h2>
            <p>
              We use your information to confirm reservations, provide seamless
              hospitality services, enhance your guest experience, and manage
              billing. We may also use your details to share exclusive hotel
              offers, event invitations, or important updates.
            </p>
          </div>

          {/* Sharing Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Sharing of Information
            </h2>
            <p>
              Your privacy is important to us. We do not sell or trade your
              personal data. Information may be shared only with trusted
              third-party partners such as payment processors or service
              providers essential for hotel operations. We may also disclose
              information when required by law.
            </p>
          </div>

          {/* Guest Choices */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Your Choices</h2>
            <p>
              Guests can update their contact details or communication
              preferences anytime by reaching out to our front desk or via
              email. You may also unsubscribe from promotional communications
              through the provided links.
            </p>
          </div>

          {/* Security */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Security</h2>
            <p>
              We implement strict security measures to protect your data from
              unauthorized access. However, please note that no digital
              transmission or storage method is completely secure.
            </p>
          </div>

          {/* Changes */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Updates to This Policy
            </h2>
            <p>
              This privacy policy may be updated periodically to reflect changes
              in our practices or services. Updated versions will always be
              available on our official website.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <p>
              For questions regarding this privacy policy, please contact us at{" "}
              <a
                className="text-[var(--primary-color)] hover:underline"
                href="mailto:privacy@silverarcadepremiere.com"
              >
                privacy@silverarcadepremiere.com
              </a>{" "}
              or reach out to our front desk during your stay.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
