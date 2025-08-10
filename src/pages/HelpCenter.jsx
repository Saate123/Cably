import Header from '../component/Header'
import FAQ from '../component/FAQ'
import Footer from '../component/Footer'

function HelpCenter() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <h4 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 text-center">
          What would you like to know about{" "}
          <span className="text-purple-600 font-bold">CABLY</span>?
        </h4>
        <form className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-4">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-bold text-gray-700 mb-1"
            >
              Name:
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder='Enter your full name'
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-700 mb-1"
            >
              Email:
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder='Enter your email address'
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="help-topic"
              className="block text-sm font-bold text-gray-700 mb-1"
            >
              Select a topic:
            </label>
            <select
              id="help-topic"
              name="topic"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">--Please choose an option--</option>
              <option value="account">Account Issues</option>
              <option value="payment">Payment & Billing</option>
              <option value="technical">Technical Support</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="question"
              className="block text-sm font-bold text-gray-700 mb-1"
            >
              Your Question:
            </label>
            <textarea
              id="question"
              name="question"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Type your question here..."
            />
          </div>
          <button
            type="submit"
            className="w-full text-white font-semibold py-2 rounded-md transition"
            style={{
              background: "conic-gradient( #a958e2, #9524e5, #a958e2, #9524e5)",
            }}
          >
            Submit
          </button>
        </form>
      </main>
      <FAQ />
      <Footer />
    </div>
  );
}

export default HelpCenter
