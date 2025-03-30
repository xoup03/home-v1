"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    // You might want to store this acceptance in local storage or cookies
    localStorage.setItem('termsAccepted', 'true');
    // Go back to previous page
    router.back();
  };

  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md">
          {/* Header */}
          <div className="text-center py-8 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Xoup Terms of Service
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Please read these terms carefully before using our services.
            </p>
          </div>

          {/* Terms Content */}
          <div className="py-8 prose prose-lg max-w-none overflow-auto max-h-[70vh]">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 py-2 border-b border-gray-100">1. Acceptance of Terms</h2>
              <p className="text-gray-700 my-4">
                Welcome to Xoup! By using our Service, you acknowledge and agree to all the Terms outlined in this document. If you have any concerns or disagreements, we encourage you to review them carefully before proceeding.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 py-2 border-b border-gray-100">2. Description of Service</h2>
              <p className="text-gray-700 my-4">
                Xoup provides a comprehensive technology solution for modern restaurant management, including but not limited to order management, table reservations, inventory management, customer relationship management, and analytics.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 py-2 border-b border-gray-100">3. User Accounts</h2>
              <ul className="list-disc pl-6 text-gray-700 my-4">
                <li className="mb-3"><strong>Registration:</strong> To access certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update it as necessary.</li>
                <li className="mb-3"><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and must notify us immediately of any unauthorized access or use.</li>
                <li><strong>Eligibility:</strong> You must be of legal age to form a binding contract in India to use the Service.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 py-2 border-b border-gray-100">4. User Conduct</h2>
              <p className="text-gray-700 my-4">
                You agree to use the Service lawfully and in accordance with these Terms. You must not:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">Violate any applicable Indian laws or regulations.</li>
                <li className="mb-2">Impersonate any person or misrepresent your affiliation with any entity.</li>
                <li className="mb-2">Interfere with the Service, its networks, or attempt unauthorized access.</li>
                <li className="mb-2">Upload or transmit harmful software, viruses, or malicious code.</li>
                <li className="mb-2">Engage in activities that damage, disable, or overburden the Service.</li>
                <li className="mb-2">Collect or harvest personal data from other users.</li>
                <li className="mb-2">Send spam, chain letters, or other unsolicited communications.</li>
                <li className="mb-2">Engage in illegal activities related to food safety or public health.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 py-2 border-b border-gray-100">5. Data Collection and Privacy</h2>
              <ul className="list-disc pl-6 text-gray-700 my-4">
                <li className="mb-3">We collect and process personal data, including email addresses, phone numbers, payment details, and restaurant data, per our Privacy Policy.</li>
                <li className="mb-3">By using the Service, you consent to the collection, use, and disclosure of your personal data as described in our Privacy Policy.</li>
                <li>Xoup complies with the Information Technology Act, 2000, and related data protection regulations.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 py-2 border-b border-gray-100">6. Payment and Refunds</h2>
              <ul className="list-disc pl-6 text-gray-700 my-4">
                <li className="mb-3"><strong>Payment:</strong> Users must pay all fees as specified on our website or per contractual agreements. All transactions are processed in Indian Rupees (INR).</li>
                <li className="mb-3"><strong>Refunds:</strong> Payments are non-refundable once the transaction is completed and the plan has started. The plan remains active until its expiration date, after which it will automatically end.</li>
                <li>Any payment disputes will be handled in accordance with Indian law.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 py-2 border-b border-gray-100">7. Intellectual Property</h2>
              <ul className="list-disc pl-6 text-gray-700 my-4">
                <li className="mb-3"><strong>Our Content:</strong> All content, including software, text, graphics, logos, and images, is the property of Xoup or its licensors and is protected under Indian copyright and trademark laws.</li>
                <li className="mb-3"><strong>User Content:</strong> You retain ownership of any data you upload. By uploading, you grant Xoup a non-exclusive, worldwide, royalty-free license to use, modify, and display the data to provide the Service.</li>
                <li>Any feedback provided by users may be used by Xoup for any purpose.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 py-2 border-b border-gray-100">8. Termination</h2>
              <ul className="list-disc pl-6 text-gray-700 my-4">
                <li className="mb-3">Xoup reserves the right to terminate your access to the Service at any time, with or without cause, upon providing notice.</li>
                <li>Upon termination, your right to use the Service will immediately cease.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 py-2 border-b border-gray-100">9. Disclaimer of Warranties</h2>
              <ul className="list-disc pl-6 text-gray-700 my-4">
                <li className="mb-3">The Service is provided "as is" and "as available" without any warranties, express or implied.</li>
                <li className="mb-3">Xoup does not guarantee uninterrupted, error-free, or secure operation of the Service.</li>
                <li>Users are responsible for ensuring compliance with local food safety laws.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 py-2 border-b border-gray-100">10. Limitation of Liability</h2>
              <ul className="list-disc pl-6 text-gray-700 my-4">
                <li className="mb-3">Xoup shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of the Service.</li>
                <li>Our total liability shall be limited to the amount paid by the user in the last billing cycle.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 py-2 border-b border-gray-100">11. Governing Law and Dispute Resolution</h2>
              <ul className="list-disc pl-6 text-gray-700 my-4">
                <li className="mb-3">These Terms are governed by and construed in accordance with the laws of India.</li>
                <li>Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in [Specify City, State], India.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 py-2 border-b border-gray-100">12. Changes to Terms</h2>
              <p className="text-gray-700 my-4">
                Xoup may update these Terms at any time by posting the revised Terms on our website. Continued use of the Service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 py-2 border-b border-gray-100">13. Contact Information</h2>
              <p className="text-gray-700 my-4">
                For any questions or concerns about these Terms, please contact us at: xoup.business@gmail.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 py-2 border-b border-gray-100">14. Severability</h2>
              <p className="text-gray-700 my-4">
                If any provision of these Terms is deemed invalid or unenforceable, it shall not affect the validity of the remaining provisions, which shall remain in full force and effect.
              </p>
            </section>
          </div>

          {/* Acceptance Section */}
          
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsOfService;