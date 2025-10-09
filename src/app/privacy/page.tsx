import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* Privacy Content */}
      <main className="max-w-3xl mx-auto px-4 py-10 text-gray-200">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-8">Effective Date: 2025-10-08</p>

        <section className="space-y-4">
          <p>
            This Privacy Policy describes how Black Flame Digital Service Company (&quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;) handles information in connection with the website
            parkingfury3d.win (the &quot;Site&quot;).
          </p>

          <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
          <p>
            We do not collect, store, or process any personal information from visitors. We do not
            use cookies, analytics tools, or any tracking technologies that identify you.
          </p>

          <h2 className="text-xl font-semibold mt-6">2. How We Use Information</h2>
          <p>
            Because we do not collect any data, we do not use, share, or sell your information.
          </p>

          <h2 className="text-xl font-semibold mt-6">3. Sharing and Disclosure</h2>
          <p>
            We do not disclose your data to third parties, as we do not collect or store any data.
          </p>

          <h2 className="text-xl font-semibold mt-6">4. Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites or services. Your use of those
            services is governed by their respective privacy policies. We do not control and are
            not responsible for how third parties handle data.
          </p>

          <h2 className="text-xl font-semibold mt-6">5. Children’s Privacy</h2>
          <p>
            We do not knowingly collect any personal information from children. Since we do not
            collect any data at all, we do not process personal information relating to children.
          </p>

          <h2 className="text-xl font-semibold mt-6">6. International Transfers</h2>
          <p>
            We do not collect or store data; therefore, no cross-border data transfers occur.
          </p>

          <h2 className="text-xl font-semibold mt-6">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this
            page and will take effect immediately upon posting. Please review this page periodically.
          </p>

          <h2 className="text-xl font-semibold mt-6">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through the
            communication channels provided on parkingfury3d.win.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}


