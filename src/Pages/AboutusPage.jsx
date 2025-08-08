import React from "react";
import { Link } from 'react-router-dom';

// Shishu Icon - bigger on mobile
const ShishuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 mr-2 text-blue-600 sm:w-5 sm:h-5 sm:mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <rect x="3" y="3" width="7" height="7" rx="1" ry="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" ry="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" ry="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" ry="1" />
  </svg>
);

// Kishore Icon - bigger on mobile
const KishoreIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 mr-2 text-blue-600 sm:w-5 sm:h-5 sm:mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <rect x="4" y="7" width="16" height="10" rx="2" ry="2" />
    <rect x="7" y="4" width="10" height="5" rx="2" ry="2" />
  </svg>
);

// Tarun Icon - bigger on mobile
const TarunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 mr-2 text-blue-600 sm:w-5 sm:h-5 sm:mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <rect x="3" y="5" width="18" height="12" rx="2" ry="2" />
    <path d="M8 17h8" />
    <path d="M12 17v4" />
  </svg>
);

const AboutLoanPortal = () => {
  return (
    <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <section className="text-gray-800">
        <h2 className="mb-4 text-3xl font-bold sm:text-3xl">Mudra Loan</h2>

        <p className="mb-4 text-lg font-semibold sm:text-lg">
          Get Mudra Loan In-principle Approval in 59 Minutes. From anywhere, anytime without visiting Bank Branch
        </p>

        <p className="mb-4 text-base sm:text-base">
          A MUDRA Loan Yojna is being provided under the MUDRA Yojna to the non-corporate and non-farming small and micro enterprises/ businesses.
          Loans upto INR 10 Lacs can be availed under the MUDRA scheme. <strong>Micro Units Development and Refinance Agency Limited (MUDRA)</strong> is an NBFC supporting the development of small business owners in India.
        </p>

        <p className="mb-4 text-base sm:text-base">
          The MUDRA Loan Yojna are to be provided for income generating small business activities across manufacturing, processing, services or trading sectors and would cover all Individuals/ Proprietary Concerns/ Partnership Firms/ Government Limited Companies/ Entities of any other legal forms running as shopkeepers, artisans, self-help groups, manufacturing units, hawkers, professionals, service providers, etc.
        </p>

        <p className="mb-4 text-base sm:text-base">
          The <strong>MUDRA Yojna</strong> can be extended under 3 categories as mentioned below:
        </p>

        <ul className="mb-8 space-y-3 text-base sm:text-base">
          <li className="flex items-start">
            <ShishuIcon /> <span><strong>Shishu :</strong> Offers loans upto INR 50,000.</span>
          </li>
          <li className="flex items-start">
            <KishoreIcon /> <span><strong>Kishore :</strong> Offers loans above INR 50,000 and upto INR 5 Lacs.</span>
          </li>
          <li className="flex items-start">
            <TarunIcon /> <span><strong>Tarun :</strong> Offers loans above INR 10 Lacs and upto INR 20 Lacs.</span>
          </li>
        </ul>

        <h3 className="mb-4 text-2xl font-semibold sm:text-2xl">Mudra Loan Eligibility</h3>

        <p className="mb-2 text-lg sm:text-base">Mudra loan can be availed by the following entities:</p>

        <ul className="mb-10 ml-4 space-y-1 text-sm text-gray-700 list-disc sm:text-base">
          <li>Applicants with minimum age of 18 years and maximum 65 years</li>
          <li>Business owners</li>
          <li>Shopkeepers</li>
          <li>Small Industrialists and Manufacturers</li>
          <li>Individuals involved with Agricultural activities</li>
          <li>Startup entrepreneurs</li>
        </ul>

        <Link
          to="/apply"
          className="inline-block px-6 py-2 text-sm font-bold text-white bg-orange-700 rounded hover:bg-orange-800 sm:text-base"
        >
          Apply For Mudra Loan →
        </Link>
      </section>
    </div>
  );
};

export default AboutLoanPortal;
