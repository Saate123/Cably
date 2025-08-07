/* eslint-disable no-unused-vars */
import React from 'react'

function FAQ() {
  return (
    <div id="faq" className="w-full mx-auto px-4 py-8 ">
      <h2 className="text-2xl text-center mb-2.5 font-bold text-[#841dc8]">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto p-6 rounded-lg gap-9">
        <details className="mt-4 shadow-md p-2.5">
          <summary className="text-lg font-semibold text-#841dc8">
            What is Cably and how does it work?
          </summary>
          <p className="text-black">
            Cably is a ride-hailing platform built for Africa. It connects
            riders with nearby drivers through a mobile app, offering safe,
            reliable, and affordable rides on demand.
          </p>
        </details>
        <details className="mt-4 shadow-md p-2.5">
          <summary className="text-lg font-semibold text-#841dc8">
            How do I become a Cably driver?
          </summary>
          <p className="text-black">
            To become a Cably driver, simply download the Cably Driver app, sign
            up, choose your preferred subscription package, upload the required
            documents, and get verified. Once approved, you can start receiving
            ride requests.
          </p>
        </details>
        <details className="mt-4 shadow-md p-2.5">
          <summary className="text-lg font-semibold text-#841dc8">
            What are the payment options available on Cably?
          </summary>
          <p className="text-black">
            Cably supports both cash and digital payments (card, wallet, etc.).
            Riders can choose their preferred payment method before or after the
            trip.
          </p>
        </details>
        <details className="mt-4 shadow-md p-2.5">
          <summary className="text-lg font-semibold text-#841dc8">
            Does Cably charge commission on rides?
          </summary>
          <p className="text-black">
            No, Cably operates on a subscription-based model for drivers,
            meaning drivers keep 100% of their earnings. No commissions are
            deducted per trip.
          </p>
        </details>
        <details className="mt-4 shadow-md p-2.5">
          <summary className="text-lg font-semibold text-#841dc8">
            Is Cably available in my city?
          </summary>
          <p className="text-black">
            Cably is currently launching in select cities across Africa. You can
            check the app or website for a list of active locations and upcoming
            cities.
          </p>
        </details>
        <details className="mt-4 shadow-md p-2.5">
          <summary className="text-lg font-semibold text-#841dc8">
            How safe is it to ride or drive with Cably?
          </summary>
          <p className="text-black">
            Safety is our top priority. All drivers are thoroughly verified,
            trips are GPS-tracked, and there’s an in-app emergency button for
            both drivers and riders to ensure quick response if needed.
          </p>
        </details>
      </div>
    </div>
  );
}

export default FAQ
