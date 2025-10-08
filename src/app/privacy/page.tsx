import Link from "next/link";
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header - Mobile Optimized (copied from home) */}
      <header className="bg-gray-900/80 backdrop-blur-sm border-b border-blue-500/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 lg:py-4">
          <div className="flex items-center justify-between">
            <h1
              className="text-lg sm:text-xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              style={{
                textShadow:
                  "0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.1)",
              }}
            >
              <span className="hidden sm:inline">Parking Fury 3D: Night City</span>
              <span className="sm:hidden">Parking Fury 3D</span>
            </h1>
            <nav className="flex space-x-3 lg:space-x-6">
              <Link href="/" className="text-blue-300 hover:text-blue-100 transition-colors text-sm lg:text-base touch-target">Home</Link>
              <Link href="/#game-iframe" className="text-blue-300 hover:text-blue-100 transition-colors text-sm lg:text-base touch-target">Game</Link>
            </nav>
          </div>
        </div>
      </header>

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

      {/* Footer - Mobile Optimized (copied from home) */}
      <footer className="bg-gray-900 border-t border-blue-500/30 py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center text-center">
            <div>
              <p className="text-gray-400 text-xs lg:text-sm">© 2025 Black Flame Digital Service Company LLC. Game copyright belongs to third parties.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 lg:gap-6">
              <Link href="/privacy" className="text-blue-300 hover:text-blue-100 transition-colors text-xs lg:text-sm touch-target">Privacy Policy</Link>
              <a href="https://gamedistribution.com/" target='_blank' className="text-blue-300 hover:text-blue-100 transition-colors text-xs lg:text-sm touch-target">Partnership</a>
              <Link href="#contact" className="text-blue-300 hover:text-blue-100 transition-colors text-xs lg:text-sm touch-target">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


