import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="w-full mt-4">
      {/* Top banner image */}
      <img
        src="https://www.mudraloanindia.org.in/public/front/img/achivement-banner.jpg"
        alt="Banner"
        className="object-cover w-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px]"
      />

      {/* Content section */}
      <div className="w-full px-4 py-6 text-gray-900 bg-orange-200 sm:px-6 md:px-10 lg:px-20">
        <h1 className="mb-4 text-2xl font-bold sm:text-3xl">
          What are the products under Mudra Loan?
        </h1>
        <p className="mb-4 text-sm sm:text-base">
          The Mudra Loan Yojna scheme offers 3 products to eligible entities, namely Shishu, Kishore, and Tarun. The details of these three products are explained here.
        </p>

        {/* Shishu Loan */}
        <h2 className="mb-2 text-lg font-semibold sm:text-xl">Shishu Loan</h2>
        <p className="mb-2 text-sm sm:text-base">
          Shishu loans under the Mudra Yojna scheme allow entrepreneurs on the threshold of starting a business to borrow up to Rs. 50,000. The following details need to be furnished to avail this loan.
        </p>
        <ul className="mb-4 ml-4 text-sm list-disc sm:text-base">
          <li>Quotation of machinery and other items that need to be purchased</li>
          <li>Details of plant and machinery purchased</li>
          <li>Details of the supplier providing the plant and machinery</li>
        </ul>

        {/* Kishore Loan */}
        <h2 className="mb-2 text-lg font-semibold sm:text-xl">Kishore Loan</h2>
        <p className="mb-2 text-sm sm:text-base">
          Kishore loans range from Rs. 50,000 to Rs. 5,00,000. They’re ideal for businesspersons who require additional funds for expanding their trade. Here’s a checklist of details and documents needed.
        </p>
        <ul className="mb-4 ml-4 text-sm list-disc sm:text-base">
          <li>Balance sheet of the business pertaining to the two previous financial years</li>
          <li>Income tax and sales tax returns</li>
          <li>Bank account statements for the previous 6 months</li>
          <li>Estimated balance sheet for the next 1 year or for the duration of the loan sought</li>
          <li>Memorandum of association and articles of association, if applicable</li>
          <li>Sales made in the current financial year before applying for the Mudra loan</li>
          <li>A report exploring the technical and economic sustainability of the applicant’s business</li>
        </ul>

        {/* Tarun Loan */}
        <h2 className="mb-2 text-lg font-semibold sm:text-xl">Tarun Loan</h2>
        <p className="mb-2 text-sm sm:text-base">
          Tarun loans under the Mudra Loan scheme range from Rs. 5,00,001 to Rs 20,00,000. Business owners who wish to avail a Tarun loan need to furnish these documents, in addition to the details required for applying to Kishore loans.
        </p>
        <ul className="mb-4 ml-4 text-sm list-disc sm:text-base">
          <li>Proof of address</li>
          <li>Proof of identity</li>
          <li>ST SC OBC General all India</li>
        </ul>

        {/* Additional Information */}
        <p className="mb-6 text-sm sm:text-base">
          With the Mudra Loan scheme, you can borrow up to Rs. 20 lakhs to 1 Crore. If your business is in need of more capital or funds, or if you don’t qualify to borrow under the Mudra Loan scheme, you could always avail a business loan on Finserv MARKETS. On Finserv MARKETS, you can apply for loans as high as Rs. 20 lakhs to 1 Crore without the need to provide any collateral. The process from application to disbursal is also quick and easy, since there’s minimal documentation involved.
        </p>

        {/* Apply button */}
        <div className="flex justify-start">
          <Link
            to="/apply"
            className="px-5 py-2 text-sm font-bold text-white bg-orange-700 rounded hover:bg-orange-900 sm:text-base"
          >
            Apply For Mudra Loan →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
