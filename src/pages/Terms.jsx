import Header from "../component/Header"
import Footer from "../component/Footer"

function Terms() {
  return (
    <div>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">CABLY Terms &amp; Conditions</h1>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">1. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing or using CABLY, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use our platform.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">2. Service Description</h2>
          <p className="text-gray-600">
            CABLY is an e-hailing platform connecting riders with drivers. We facilitate ride bookings, payments, and communication between users and drivers.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">3. User Responsibilities</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Provide accurate information during registration and booking.</li>
            <li>Respect drivers and other users at all times.</li>
            <li>Comply with all applicable laws and regulations.</li>
            <li>Pay for rides promptly using the provided payment methods.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">4. Driver Responsibilities</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Maintain valid licenses and insurance.</li>
            <li>Provide safe and clean vehicles.</li>
            <li>Respect riders and adhere to scheduled bookings.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">5. Payments &amp; Fees</h2>
          <p className="text-gray-600">
            All payments are processed securely through CABLY. Fees may apply for cancellations, no-shows, or other services as outlined in our pricing policy.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">6. Limitation of Liability</h2>
          <p className="text-gray-600">
            CABLY is not liable for any direct, indirect, or consequential damages arising from the use of our platform, including but not limited to accidents, delays, or loss of property.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">7. Privacy Policy</h2>
          <p className="text-gray-600">
            Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">8. Changes to Terms</h2>
          <p className="text-gray-600">
            CABLY reserves the right to update these Terms &amp; Conditions at any time. Continued use of the platform constitutes acceptance of the revised terms.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">9. Contact Us</h2>
          <p className="text-gray-600">
            For questions or concerns regarding these Terms &amp; Conditions, please contact us at <a href="mailto:Hello@mycably.com" className="text-blue-600 underline">Hello@mycably.com</a>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Terms
