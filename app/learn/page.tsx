// app/learn/page.tsx
import { CheckCircle2, XCircle } from 'lucide-react';

export default function LearnPage() {
  return (
    <div className="pb-24 max-w-4xl mx-auto">
      {/* 1. Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
        Aadhaar Linking vs. Aadhaar Seeding
      </h1>

      {/* 2. Key Question */}
      <p className="mt-4 text-lg text-center text-gray-600">
        Understanding the difference is crucial for receiving your scholarship funds without delay.
      </p>

      {/* 3. Visual Comparison */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Aadhaar Linking Card */}
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800">Aadhaar Linked</h2>
          <p className="mt-2 text-gray-600">This connects your Aadhaar as an identity proof (e-KYC) with the bank.</p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-green-500" />
              <span>Used for Identity Verification</span>
            </li>
            <li className="flex items-center gap-3">
              <XCircle className="text-red-500" />
              <span>NOT enabled for receiving DBT funds</span>
            </li>
          </ul>
        </div>

        {/* Aadhaar Seeding Card */}
        <div className="border-2 border-blue-500 rounded-lg p-6 shadow-lg bg-blue-50">
          <h2 className="text-2xl font-semibold text-blue-800">Aadhaar Seeded (for DBT)</h2>
          <p className="mt-2 text-gray-600">This maps your Aadhaar to a specific bank account to receive government benefits.</p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-green-500" />
              <span>Used for Identity Verification</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-green-500" />
              <span>ENABLED for receiving DBT funds</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 4. The Bottom Line */}
      <div className="mt-10 p-6 rounded-lg bg-amber-100 border border-amber-200 text-center">
        <h3 className="text-xl font-bold text-amber-900">The Bottom Line</h3>
        <p className="mt-2 text-amber-800">
          For your scholarship, your bank account MUST be Aadhaar Seeded and mapped with NPCI. Simply linking is not enough.
        </p>
      </div>

      {/* 5. Action Steps */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">What To Do Next?</h3>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <a
            href="https://resident.uidai.gov.in/bank-mapper"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Check Your Seeding Status
          </a>
          <a
            href="/how-to-seed" // We will create this page later
            className="bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Learn How to Seed Your Account
          </a>
        </div>
      </div>
    </div>
  );
}