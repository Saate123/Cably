import Header from '../component/Header'
import Footer from '../component/Footer'

function Privacy() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 px-4 py-8 md:px-8 lg:px-32">
        <section className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
          <p className="mb-6 text-gray-700">
            Welcome to CABLY. Your privacy is important to us. This Privacy Policy explains how CABLY collects, uses, and protects your information when you use our e-hailing app to book rides online.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Information We Collect</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, and payment details.
            </li>
            <li>
              <strong>Location Data:</strong> Real-time location to match you with drivers and provide accurate pick-up/drop-off services.
            </li>
            <li>
              <strong>Ride Details:</strong> Trip history, pick-up and drop-off addresses, and ride preferences.
            </li>
            <li>
              <strong>Device Information:</strong> Device type, operating system, and app usage data.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>To provide and improve our ride-booking services.</li>
            <li>To process payments and send ride confirmations.</li>
            <li>To enhance safety and verify user identity.</li>
            <li>To communicate updates, promotions, and support information.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">How We Protect Your Information</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>We use encryption and secure servers to protect your data.</li>
            <li>Access to personal information is restricted to authorized personnel only.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Sharing of Information</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>We share your information with drivers to facilitate ride bookings.</li>
            <li>We may share data with third-party service providers for payment processing and app functionality.</li>
            <li>We do not sell your personal information to third parties.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Your Choices</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>You can update or delete your account information at any time.</li>
            <li>You may opt out of promotional communications.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Contact Us</h2>
          <p className="text-gray-700">
            If you have questions about this Privacy Policy or your data, please contact us at <a href="mailto:support@cably.com" className="text-blue-600 underline">support@cably.com</a>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Privacy
